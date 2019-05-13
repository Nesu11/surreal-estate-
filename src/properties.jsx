import React from 'react';
import PropertyCard from './property-card';
import '../styles/properties.css';


const Properties = () => (
  <div className="properties">
    <PropertyCard
      title="Lovely period property"
      type="Detached"
      bedrooms={4}
      bathrooms={3}
      price={345678}
      city="Manchester"
      email="mock@email.com"
    />
  </div>
);

export default Properties;
