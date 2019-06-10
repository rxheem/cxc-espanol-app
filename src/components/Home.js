import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ScrollReveal from 'scrollreveal';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <span />
        </div>

        <div fluid={true}>
          <span>Made with Bulma</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
