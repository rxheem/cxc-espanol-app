import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = props => {

  const centerNavStyle = {

  }

  return (
    <footer>
      <Navbar bg='dark' variant='dark'>
        <Nav as='ul' style={centerNavStyle}>
          <Nav.Item as='li'>
            <Nav.Link href='/tutoring/'>Tutoring</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </footer>
  );
};

export default Footer;
