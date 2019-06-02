import React from 'react';
import '../styles/property-card.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed, faBath, faPoundSign, faEnvelope, faStar,
} from '@fortawesome/free-solid-svg-icons';

library.add(faBed, faBath, faPoundSign, faEnvelope, faStar);


const PropertyCard = ({
  _id,
  title,
  bedrooms,
  bathrooms,
  price,
  email,
  type,
  city,
  onSaveProperty,
  userId,
}) => (
  <div className="propertyCard">
    <div className="header"><FontAwesomeIcon className="icon-card" icon="igloo" /></div>
    <div className="title">{title}</div>
    <div>
      <span className="type">{type}
      </span> -
      <span className="city">{city}</span>
    </div>

    <div><FontAwesomeIcon icon="bed" />
      <span className="bedrooms">{bedrooms}</span>
    </div>

    <div>
      <FontAwesomeIcon icon="bath" />
      <span className="bathrooms">{bathrooms}</span>
    </div>

    <div>
      <FontAwesomeIcon icon="pound-sign" />
      <span className="price">{price}</span>
    </div>

    <div className="email-box">
      <FontAwesomeIcon icon="envelope" className="mail-icon" />
      <span className="email">{email}</span>
    </div>

    <div>
      {userId && (
        <a
          href="#"
          onClick={() => onSaveProperty(_id)}
          className="save"
        >
          <i className="fas fa-star" /> <FontAwesomeIcon icon="star" />Save
        </a>
      )}
    </div>
  </div>
);

export default PropertyCard;
