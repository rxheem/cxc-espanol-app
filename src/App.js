import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// Views imports
import Footer from './views/Footer';
import MainNavigation from './views/MainNavigation';

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
          <span />
        </Switch>

        {/* Footer */}
        <Route route='/' component={Footer} />

        {/* Provides styling for the app component */}
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default withRouter(App);
