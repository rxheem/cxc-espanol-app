import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// Views imports
import Footer from './views/Footer';
import MiniSocialView from './views/miniSocialView/MiniSocialView';
import MainNavigation from './views/MainNavigation';

// Components
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='App'>
        <Route path='/' component={MiniSocialView} />
        <Route path='/' component={MainNavigation} />

        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
