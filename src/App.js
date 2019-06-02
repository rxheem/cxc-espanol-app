import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div />
      </div>
    )
  }
}

export default withRouter(App);
