import React from 'react';
import '../styles/addProperty.css';
import axios from 'axios';
import Alert from './alert';

const urlProperty = 'http://localhost:3000/api/v1/PropertyListing'

class AddProperty extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        bedrooms: 0,
        bathrooms: 0,
        price: 0,
        city: 'Manchester',
        email: '',
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,

    };
  }

  handleAddProperty= event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    axios.post(urlProperty, this.state.fields)
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Property has been Added',
      }))
      .catch((error) => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
        console.log(error);
      });
  };

  handleFieldChange= (event) => this.setState({
    fields: {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    },
  });

  render() {
    return (
      <div className="AddProperty"> 
     
        <form onSubmit={this.handleAddProperty}>
          <div> Property Discription
            <input className="discription" name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="discription" />
            </div>

            <div> Type   
              
            <select className="propertyType" name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="flat">Flat</option>
              <option value="detached">Detached</option>
              <option value="semi-detached">Semi-Detached</option>
              <option value="terraced">Terraced</option>
              <option value="end of terrace">End of Terrace</option>
              <option value="cottage">Cottage</option>
            </select>
            </div>
          

          <div>
            Bedrooms:
            <input className="addBedrooms" name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} placeholder="no. of bedrooms" />
          </div>

          <div>
              Bathrooms:
            <input className="addBathrooms" name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} placeholder="no. of bathrooms" type="number" />
          </div>

          <div>
            Price
          <input className="addPrice" name="price" value={this.state.fields.price} onChange={this.handleFieldChange} placeholder="price" type="number" />
          </div>

          <div> Location
          <select className="location" name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Leeds">Leeds</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          </div>

          <div> Email
            <input className="contactEmail" name="email" value={this.state.fields.email} onChange={this.handleFieldChange} placeholder="email" />
          </div>

          <button type="submit" className="addButton">
            <label>
            Add Property
            </label>
          </button>
          {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
          {this.state.isError && <Alert message={this.state.alertMessage} />}

        </form>
      </div>
    );
  }
}

export default AddProperty;
