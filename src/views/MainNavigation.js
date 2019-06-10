import React from 'react';

// Router
import { withRouter } from 'react-router-dom';

const MainNavigation = props => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <h1 className='title is-4'>CXC Español</h1>
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
                <a className='navbar-item' href='/vocab/'>
                  Present Tense
                </a>
                <a className='navbar-item' href='/tenses/present-progressive/'>
                  Present Progressive
                </a>
                <a className='navbar-item' href='/tenses/preterite/'>
                  Preterite Tense
                </a>
                <a className='navbar-item' href='/tenses/imperfect/'>
                  Imperfect Tense
                </a>
                <a className='navbar-item' href='/tenses/conditional/'>
                  Conditional Tense
                </a>
                <a className='navbar-item' href='/tenses/future/'>
                  Future Tense
                </a>
                <a className='navbar-item' href='/tenses/subjunctive/'>
                  Subjunctive Mood
                </a>
                <hr className='navbar-divider' />
                <a className='navbar-item' href='/report-an-issue/'>
                  <i class='fas fa-bug' />
                  Report an issue
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
