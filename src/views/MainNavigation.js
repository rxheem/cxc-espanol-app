import React from 'react';

// Bootstrap stuff
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

// Router
import { withRouter, Link } from 'react-router-dom';

const MainNavigation = props => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar bg='light' variant='light' expand='lg'>
        <Navbar.Toggle aria-controls='main-navbar-nav' />

        <Navbar.Collapse id='main-navbar-nav'>
          <Nav className='ml-auto' as='ul'>
            <Nav.Link href='/vocab/'>Vocabulary</Nav.Link>
            <NavDropdown title='Tenses' id='tenses-nav-dropdown'>
              <NavDropdown.Item href='/tenses/present-tense/'>
                Present Tense
              </NavDropdown.Item>
              <NavDropdown.Item href='/tenses/present-progressive/'>
                Present Progressive
              </NavDropdown.Item>
              <NavDropdown.Item href='/tenses/preterite/'>
                Preterite Tense
              </NavDropdown.Item>
              <NavDropdown.Item href='/tenses/imperfect/'>
                Imperfect Tense
              </NavDropdown.Item>
              <NavDropdown.Item href='/tenses/conditional/'>
                Conditional Tense
              </NavDropdown.Item>
              <NavDropdown.Item href='/tenses/future/'>
                Future Tense
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/tenses/subjunctive/'>
                Subjunctive Mood{' '}
                <Badge pill variant='primary'>
                  ess
                </Badge>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Orals' id='orals-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/practice-question/'>Practice Questions</Nav.Link>
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
