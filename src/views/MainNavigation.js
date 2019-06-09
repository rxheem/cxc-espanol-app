import React from 'react';

// Bootstrap stuff
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Router
import { withRouter, Link } from 'react-router-dom';

const MainNavigation = props => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Toggle aria-controls='main-navbar-nav' />

        <Navbar.Collapse id='main-navbar-nav'>
          <Nav className='ml-auto'>
            <NavItem title='Vocabulary' to='/vocab/' />
            <NavItem title='Tenses' to='/tenses/' />
            <NavItem title='' to='/' />
            <NavItem title='' to='/' />
            <NavItem title='' to='/' />
            <NavItem title='Orals' to='/orals/' />
            <NavItem title='Tutoring' to='/tutoring/' />
            <NavItem title='Conact' to='/' />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Provides styling for the main navigation component */}
      <style jsx>{``}</style>
    </React.Fragment>
  );
};

export default withRouter(MainNavigation);

/* Navigation Item */
export const NavItem = props => {
  return (
    <Link className='nav-link' to={props.to}>
      {props.title}
    </Link>
  );
};
