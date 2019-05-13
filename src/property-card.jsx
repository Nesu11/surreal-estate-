import React from 'react';
import '../styles/property-card.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed, faBath, faPoundSign, faEnvelope 
} from '@fortawesome/free-solid-svg-icons';

library.add(faBed, faBath, faPoundSign, faEnvelope);


const PropertyCard = (props) => (
  <div className="propertyCard">
    <div className="header">
      <FontAwesomeIcon className="icon-card" icon="igloo" />
    </div>

    <div className="title">{props.title}</div>

    <div>
      <span
        className="type">
        {props.type}
      </span> -
      <span className="city">{props.city}</span>
    </div>

    <div>
      <FontAwesomeIcon icon="bed" />
      <span className="bedrooms">{props.bedrooms}</span>
    </div>

    <div>
      <FontAwesomeIcon icon="bath" />
      <span className="bathrooms">{props.bathrooms}</span>
    </div>

    <div>
      <FontAwesomeIcon icon="pound-sign" />
      <span className="price">{props.price}</span>
    </div>

    <div className="email-box">
      <FontAwesomeIcon icon="envelope" className="mail-icon" />
      <span className="email">{props.email}</span>
    </div>
  </div>
);

export default PropertyCard;
