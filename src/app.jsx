import React from 'react';
import '../styles/app.css';
import NavBar from './nav-bar';
import { Switch, Route } from 'react-router-dom';
import Properties from './properties';
import AddProperty from './add-property';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: null,
    };
  }

  handleLogin = (response) => {
    this.setState({ userId: response.userID });
  };

  handleLogout = () => {
    window.FB.logout();
    this.setState({ userId: null });
  };

  render() {
    return (
      <div>
        <NavBar
          onLogin={this.handleLogin}
          userId={this.state.userId}
          onLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Properties {...props} userId={this.state.userId} />}
          />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </div>

    );
  }
}

export default App;
