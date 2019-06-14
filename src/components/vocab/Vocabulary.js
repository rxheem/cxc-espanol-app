/* Vocabulary.js */
import React, { Component } from 'react';
import $ from 'jquery/dist/jquery';

// importing Tabs
import CommonVerbsContent from './tabContent/CommonVerbsContent';

import { withRouter } from 'react-router-dom';

class Vocabulary extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // Runs after the component finishes mounting
  componentDidMount() {
    $(document).ready(function() {
      console.log('Vocabulary component loaded successfully.');
    });
  }

  // Switches focus and view to the Common Verbs tab
  switchToCommonVerbs = () => {
    this.removeActive();
    this.hideAll();

    $('#commonVerbsTab').addClass(' is-active');
    $('#commonVerbsTabContent').removeClass(' is-hidden');
  };

  // Switches focus and view to the Common Phrases tab
  switchToCommonPhrases = () => {
    this.removeActive();
    this.hideAll();

    $('#commonPhrasesTab').addClass(' is-active');
    $('#commonPhrasesTabContent').removeClass(' is-hidden');
  };

  // Switches focus and view to the False Friends tab
  switchToFalseFriends = () => {
    this.removeActive();
    this.hideAll();

    $('#falseFriendsTab').addClass('is-active');
    $('#falseFriendsTabContent').removeClass('is-hidden');
  };

  // Removes the active class from every li
  removeActive() {
    $('li').each(function() {
      $(this).removeClass('is-active');
    });
  }

  // Hides all the tabs by adding the is-hidden class
  hideAll() {
    $('#commonVerbsTabContent').addClass('is-hidden');
    $('#commonPhrasesTabContent').addClass('is-hidden');
    $('#falseFriendsTabContent').addClass('is-hidden');
  }

  render() {
    return (
      <div>
        <br />
        <div className='container'>
          <h1 className='title is-3'>Vocabulary</h1>
          <p />
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
              <CommonVerbsContent />
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
