import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = props => {
  // Style to center the navigation
  const centerNavStyle = {};

  return (
    <footer>
      <Navbar bg='dark' variant='dark'>
        <Nav as='ul' style={centerNavStyle}>
          <Nav.Item as='li'>
            <Nav.Link href='/privacy-policy/'>Privacy Policy</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='/terms-of-use/'>Terms Of Use</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='/contribute/'>Contribute</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='/tutoring/'>Tutoring</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='/contact/'>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
