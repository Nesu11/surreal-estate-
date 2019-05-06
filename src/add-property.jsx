import React from 'react';
import '../styles/addProperty.css';

class AddProperty extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handleAddProperty = this.handleAddProperty.bind(this);
  }
  handleAddProperty(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="AddProperty"> Add Propert Page
        <form onSubmit={this.handleAddProperty}> forma </form>
      </div>
    );
  }
}

export default AddProperty;
