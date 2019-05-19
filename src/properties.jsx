import React from 'react';
import PropertyCard from './property-card';
import '../styles/properties.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import qs from 'qs'

const URL_DATA = 'http://localhost:3000/api/v1/PropertyListing';


class Properties extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      error: false,
      alertMessage: '',

    };
  }

  componentDidMount() {
    axios.get(URL_DATA)
      .then(response => this.setState({ properties: response.data }))
      .catch(() => { 
        this.setState({
          error: true,
          alertMessage: 'Unable to load properties. Please try again later.',
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj)
    };
  };

  render() {
    return (
      <div className="properties">
        <div className="sideBar">
        <span className="filter"> Filter by City </span>
          <Link to={'/?query={"city": "Manchester"'}> Manchester </Link> 
          <Link to={'/?query={"city": "Sheffield"}'}> Sheffield </Link> 
          <Link to={'/?query={"city": "Leeds"}'}> Leeds </Link> 
          <Link to={'/?query={"city": "Liverpool"}'}> Liverpool </Link> 
        </div>

        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    );
  }
}

export default Properties;
