import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import { withRouter } from 'react-router-dom';

class Vocabulary extends Component {

  render(){
    return (
      <React.Fragment>

        <div>
          <span>Vocabulary</span>


        </div>

        <div fluid={true}>
          <span>Vocabulary</span>


        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Vocabulary);
