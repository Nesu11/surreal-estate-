import React from 'react';
import PropertyCard from './property-card';
import '../styles/properties.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import qs from 'qs';

const URL_DATA = 'http://localhost:3000/api/v1/PropertyListing';


class Properties extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      error: false,
      alertMessage: '',
      search: '',

    };
  }

  componentDidMount() {
    axios.get(URL_DATA)
      .then((response) => this.setState({ properties: response.data }))
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
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),

    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleSearch = event => {
    event.preventDefault();
    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });
    const { history } = this.props;
    history.push(newQueryString);
  };

  handleSaveProperty = (propertyId) => {
    const { userId } = this.props;

    axios.post('http://localhost:3000/api/v1/Favourite', {
      propertyListing: propertyId,
      fbUserId: userId,
    });
  };

  render() {
    return (
      <div className="properties">
        <div className="sideBar">
          <form onSubmit={this.handleSearch}>
            <input
              type="text"
              value={this.state.search}
              onChange={event => this.setState({ search: event.target.value })}
            />

            <button type="submit">Search</button>
          </form>
          <span className="filter"> Filter by City </span>
          <Link to={this.buildQueryString('query', { city: 'Manchester' })}> Manchester </Link>
          <Link to={this.buildQueryString('query', { city: 'Sheffield' })}> Sheffield </Link>
          <Link to={this.buildQueryString('query', { city: 'Leeds' })}> Leeds </Link>
          <Link to={this.buildQueryString('query', { city: 'Liverpool' })}> Liverpool </Link>
          <span className="sortBy">Sort by</span>
          <Link to={this.buildQueryString('sort', { price: -1 })}>Price Descending</Link>
          <Link to={this.buildQueryString('sort', { price: 1 })}> Price Ascending</Link>
        </div>

        <div className="col-div">
          {this.state.properties.map(property => (
            <div key={property._id} className="col">
              <PropertyCard
                userId={this.props.userId}
                {...property}
                onSaveProperty={this.handleSaveProperty}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Properties;
