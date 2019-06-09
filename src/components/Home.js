import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ScrollReveal from 'scrollreveal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid={false}>
          <span />
        </Container>

        <Container fluid={true}>
          <span />
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
