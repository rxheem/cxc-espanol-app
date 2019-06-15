import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import Page from '../../pages/Page';
import MainSection from './views/MainSection';

class PresentTense extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Runs after the component finshes mounting
  componentDidMount() {
    // Changes the title of the tab
    document.title = 'Present Tense | CSEC Español';
  }

  render() {
    return (
      <Page id='PresentTense'>
        <div className='container-fluid'>
          <Row>
            <Col sm={6} md={3} lg={3}>
              <span>First</span>
            </Col>
            <Col>
              <MainSection />
            </Col>
            <Col sm={6} md={3} lg={3}>
              <span>Other section</span>
            </Col>
          </Row>
        </div>
      </Page>
    );
  }
}

export default withRouter(PresentTense);
