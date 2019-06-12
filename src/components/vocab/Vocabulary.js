import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import $ from 'jquery/dist/jquery';

import { withRouter } from 'react-router-dom';

class Vocabulary extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    $(document).ready(function() {
      console.log('jQuery is ready.');
    });
  }

  switchToCommonVerbs = () => {
    this.removeActive();
    this.hideAll();

    $('#commonVerbsTab').addClass(' is-active');
    $('#commonVerbsTabContent').removeClass(' is-hidden');
  };

  switchToCommonPhrases = () => {
    this.removeActive();
    this.hideAll();

    $('#commonPhrasesTab').addClass(' is-active');
    $('#commonPhrasesTabContent').removeClass(' is-hidden');
  };

  switchToFalseFriends = () => {
    this.removeActive();
    this.hideAll();

    $('#falseFriendsTab').addClass(' is-active');
    $('#falseFriendsTabContent').removeClass(' is-hidden');
  };

  removeActive() {
    $('li').each(function() {
      $(this).removeClass(' is-active');
    });
  }

  hideAll() {
    $('#commonVerbsTabContent').addClass(' is-hidden');
    $('#commonPhrasesTabContent').addClass(' is-hidden');
    $('#falseFriendsTabContent').addClass(' is-hidden');
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='tabs is-centered'>
            <ul>
              <li id='commonVerbsTab' className='is-active'>
                <a onClick={this.switchToCommonVerbs}>Common Verbs</a>
              </li>
              <li id='commonPhrasesTab' onClick={this.switchToCommonPhrases}>
                <a>Common Phrases</a>
              </li>
              <li id='falseFriendsTab' onClick={this.switchToFalseFriends}>
                <a>False Friends</a>
              </li>
            </ul>
          </div>

          {/* All tab content */}
          <div className='container'>
            {/* Common Verbs */}
            <div id='commonVerbsTabContent'>
              <span />
            </div>

            {/* Common Phrases */}
            <div id='commonPhrasesTabContent' className='is-hidden'>
              <span />
            </div>

            {/* False Friends */}
            <div id='falseFriendsTabContent' className='is-hidden'>
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Vocabulary);
