import React from 'react';
import '../styles/navBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


library.add(faIgloo);

const NavBar = () => (
  <div className="nav-bar">
    <div className="logo">
      <FontAwesomeIcon className="icon" icon="igloo"  />
     Surreal Estate
    </div>
    <ul className="nav">
      <Link to="/" className="item"> View Properties </Link>
      <Link to="add-property" className="item">Add a property </Link>
    </ul>

  </div>

);

export default NavBar;
