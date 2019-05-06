import React from 'react';
import '../styles/addProperty.css';

class AddProperty extends React.Component {
  constructor() {
    super();

    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        bedrooms: '',
        bathrooms: '',
        price: '',
        city: 'Manchester',
        email: '',
      },
    };
  }

  handleAddProperty= event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange= (event) => this.setState({
    fields: {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    },
  });

  render() {
    return (
      <div className="AddProperty"> Add Propert Page
        <form onSubmit={this.handleAddProperty}>
          <div>
            <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="title/tagline" />

            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="flat">Flat</option>
              <option value="detached">Detached</option>
              <option value="semi-detached">Semi-Detached</option>
              <option value="terraced">Terraced</option>
              <option value="end of terrace">End of Terrace</option>
              <option value="cottage">Cottage</option>
            </select>
          </div>

          <div>
            <input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} placeholder="no. of bedrooms" />

            <input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} placeholder="no. of bathrooms" type="number" />
          </div>


          <input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} placeholder="price" type="number" />

          <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Leeds">Leeds</option>
            <option value="Liverpool">Liverpool</option>
          </select>

          <div>
            <input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} placeholder="email" />
          </div>

          <button type="submit">
            <label>
            Add Property
            </label>
          </button>

        </form>
      </div>
    );
  }
}

export default AddProperty;
