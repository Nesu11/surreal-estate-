import React from 'react';
import '../styles/navBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);

const NavBar = () => (
  <div>
    <div className="nav-bar"> My Nav Bar </div>
    <div className="logo">
      <FontAwesomeIcon icon="igloo" />
      Surreal Estate
    </div>
    <ul className="nav">
      <li className="item" />
      <li className="item" />
    </ul>
  </div>

);

export default NavBar;
