import React from 'react';
import '../styles/navBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';



library.add(faIgloo);

const NavBar = (props) => (
  <div className="nav-bar">
    <div className="logo">
      <FontAwesomeIcon className="icon" icon="igloo"  />
     Surreal Estate
    </div>
    <div className="nav">
      <Link to="/" className="item"> View Properties </Link>
      <Link to="add-property" className="item">Add a property </Link>
      {props.userId
        ? (
          <div>
            <button onClick={props.onLogout}>Log out</button>
          </div>
        ) : (
          <FacebookLogin
            appId={514553005751666}
            autoLoad
            callback={props.onLogin}
          >
      Sign in with Facebook
          </FacebookLogin>
        )}


    </div>

  </div>

);

export default NavBar;
