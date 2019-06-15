import React from 'react';

// Router
import { withRouter } from 'react-router-dom';

import MiniSocialView from './miniSocialView/MiniSocialView';

const MainNavigation = props => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <nav id='navbar' className='navbar' role='navigation' aria-label='main navigation'
       style={{ overflow: 'hidden', position: 'fixed', top: '0', width: '100%' }}>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <h1 className='title is-4'>CSEC Español</h1>
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
            <a className='navbar-item' href='/'>
              <i
                className='fas fa-home'
                style={{ color: 'coral', marginRight: '5px' }}
              />
              Home
            </a>
            <a className='navbar-item' href='/vocab/'>
              <i
                className='fab fa-pushed'
                style={{ color: 'blue', marginRight: '5px' }}
              />
              Vocabulary
            </a>
            <a className='navbar-item' href='/blog/'>
              <i
                className='fab fa-blogger-b'
                style={{ color: 'red', marginRight: '5px' }}
              />
              Blog
            </a>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>Verb Tenses</a>
              <div className='navbar-dropdown'>
                <a className='navbar-item' href='/tenses/present/'>
                  <i
                    className='fas fa-certificate'
                    style={{ color: 'coral', marginRight: '7px' }}
                  />
                  Present Tense
                </a>
                <a className='navbar-item' href='/tenses/present-progressive/'>
                  <i
                    className='fas fa-certificate'
                    style={{ color: 'blue', marginRight: '7px' }}
                  />
                  Present Progressive
                </a>
                <a className='navbar-item' href='/tenses/preterite/'>
                  <i
                    className='fas fa-certificate'
                    style={{ color: 'green', marginRight: '7px' }}
                  />
                  Preterite Tense
                </a>
                <a className='navbar-item' href='/tenses/perfect/'>
                  <i
                    className='fas fa-certificate'
                    style={{ color: 'pink', marginRight: '7px' }}
                  />
                  Perfect Tense
                </a>
                <a className='navbar-item' href='/tenses/imperfect/'>
                  <i
                    className='fas fa-certificate'
                    style={{ color: 'yellow', marginRight: '7px' }}
                  />
                  Imperfect Tense
                </a>
                <a className='navbar-item' href='/tenses/conditional/'>
                  <i
                    className='fas fa-certificate'
                    style={{ color: 'orange', marginRight: '7px' }}
                  />
                  Conditional Tense
                </a>
                <a className='navbar-item' href='/tenses/future/'>
                  <i
                    className='fas fa-certificate'
                    style={{ color: 'purple', marginRight: '7px' }}
                  />
                  Future Tense
                </a>
                <a className='navbar-item' href='/tenses/subjunctive/'>
                  <i
                    className='fas fa-certificate'
                    style={{ color: 'red', marginRight: '7px' }}
                  />
                  Subjunctive Mood
                </a>
                <hr className='navbar-divider' />
                <a className='navbar-item' href='/report-an-issue/'>
                  <i
                    className='fas fa-bug'
                    style={{ color: 'brown', marginRight: '7px' }}
                  />
                  Report an issue
                </a>
              </div>
            </div>
            <a className='navbar-item' href='/orals/'>
              <i
                className='fas fa-volume-up'
                style={{ color: 'purple', marginRight: '5px' }}
              />
              Orals
            </a>
            <a className='navbar-item' href='/exercises/'>
              <i
                className='fas fa-walking'
                style={{ color: 'pink', marginRight: '5px' }}
              />
              Exercises
            </a>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <MiniSocialView />
            </div>
          </div>
        </div>
      </nav>
      <br />
    </React.Fragment>
  );
};

export default withRouter(MainNavigation);
