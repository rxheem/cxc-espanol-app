import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// Views imports
import Footer from './views/Footer';
import MainNavigation from './views/MainNavigation';

// Components
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        {/* Main Naiviagtion */}
        <Route route='/' component={MainNavigation} />

        <Switch>
          <Route route='/' component={Home} />
        </Switch>

        {/* Footer */}
        <Route route='/' component={Footer} />
      </div>
    );
  }
}

export default withRouter(App);
