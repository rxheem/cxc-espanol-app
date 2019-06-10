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
        <div className='container'>
          <span>Made with Bulma</span>
        </div>

        <div fluid={true}>

        </div>
      </React.Fragment>
    );
  }
}

export default Home;
