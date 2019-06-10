import React from 'react';

// Router
import { withRouter } from 'react-router-dom';

const MainNavigation = props => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              width='112'
              height='28'
            />
          </a>

          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item'>Home</a>
            <a className='navbar-item'>Vocabulary</a>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>Verb Tenses</a>
              <div className='navbar-dropdown'>
                <a className='navbar-item'>Present Tense</a>
                <a className='navbar-item'>Present Progressive</a>
                <a className='navbar-item'>Preterite Tense</a>
                <a className='navbar-item'>Imperfect Tense</a>
                <a className='navbar-item'>Conditional Tense</a>
                <a className='navbar-item'>Future Tense</a>
                <a className='navbar-item'>Subjunctive Mood</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>
                  <i class='fas fa-bug' />Report an issue
                </a>
              </div>
            </div>
            <a className='navbar-item'>Orals</a>
            <a className='navbar-item'>Exercises</a>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary'>
                  <strong>Sign up</strong>
                </a>
                <a className='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default withRouter(MainNavigation);
