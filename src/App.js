import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import $ from 'jquery';

// Views imports
import MainNavigation from './views/MainNavigation';

// Components
import Home from './components/Home';
import Blog from './components/Blog';
import Vocabulary from './components/vocab/Vocabulary';

// All tenses import
import Tenses from './tenses/Tenses';
import PresentTense from './tenses/present/PresentTense';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className='App'>
        <Route path='/' component={MainNavigation} />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/vocab/' component={Vocabulary} />
          <Route exact path='/blog/' component={Blog} />

          {/* Tense */}
          <Route exact path='/tenses/' component={Tenses} />
          <Route exact path='/tenses/present/' component={PresentTense} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
