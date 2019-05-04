import React from 'react';
import '../styles/app.css';
import NavBar from './nav-bar';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './add-property';


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </div>
);


export default App;
