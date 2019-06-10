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
              Home
            </a>
            <a className='navbar-item' href='/vocab/'>
              Vocabulary
            </a>
            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>Verb Tenses</a>
              <div className='navbar-dropdown'>
                <a className='navbar-item' href='/vocab/'>
                  <i
                    class='fas fa-certificate'
                    style={{ color: 'coral', marginRight: '5px' }}
                  />
                  Present Tense
                </a>
                <a className='navbar-item' href='/tenses/present-progressive/'>
                  <i
                    class='fas fa-certificate'
                    style={{ color: 'blue', marginRight: '5px' }}
                  />
                  Present Progressive
                </a>
                <a className='navbar-item' href='/tenses/preterite/'>
                  <i
                    class='fas fa-certificate'
                    style={{ color: 'green', marginRight: '5px' }}
                  />
                  Preterite Tense
                </a>
                <a className='navbar-item' href='/tenses/imperfect/'>
                  <i
                    class='fas fa-certificate'
                    style={{ color: 'yellow', marginRight: '5px' }}
                  />
                  Imperfect Tense
                </a>
                <a className='navbar-item' href='/tenses/conditional/'>
                  <i
                    class='fas fa-certificate'
                    style={{ color: 'orange', marginRight: '5px' }}
                  />
                  Conditional Tense
                </a>
                <a className='navbar-item' href='/tenses/future/'>
                  <i
                    class='fas fa-certificate'
                    style={{ color: 'purple', marginRight: '5px' }}
                  />
                  Future Tense
                </a>
                <a className='navbar-item' href='/tenses/subjunctive/'>
                  <i
                    class='fas fa-certificate'
                    style={{ color: 'red', marginRight: '5px' }}
                  />
                  Subjunctive Mood
                </a>
                <hr className='navbar-divider' />
                <a className='navbar-item' href='/report-an-issue/'>
                  <i class='fas fa-bug' style={{ color: 'brown', marginRight: '5px' }}/>
                  Report an issue
                </a>
              </div>
            </div>
            <a className='navbar-item' href='/orals/'>
              Orals
            </a>
            <a className='navbar-item' href='/exercises/'>
              Exercises
            </a>
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
