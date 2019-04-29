import React from 'react';
import '../styles/navBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);

const NavBar = () => (
  <div className="nav-bar">
    <div className="logo">
      <FontAwesomeIcon className="icon" icon="igloo"  />
     Surreal Estate
    </div>
    <ul className="nav">
      <li className="item"> View Properties </li>
      <li className="item">Add a property </li>
    </ul>

  </div>

);

export default NavBar;
