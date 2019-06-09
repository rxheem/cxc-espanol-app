import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import { withRouter } from 'react-router-dom';

class Vocabulary extends Component {

  render(){
    return (
      <React.Fragment>

        <Container>
          <span>Vocabulary</span>
        </Container>

        <Container fluid={true}>
          <span>Vocabulary</span>
        </Container>

      </React.Fragment>
    )
  }
}

export default withRouter(Vocabulary);
