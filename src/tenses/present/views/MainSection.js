import React, { Fragment } from 'react';

// All imports
import PresentTenseRegularVerbsEndingTable from './PresentTenseRegularVerbsEndingTable';

const MainSection = props => {
  return (
    <Fragment>
      <h1 className='title is-4'>The Simple Present Tense</h1>

      {/* Definition */}
      <div style={{ marginTop: '-10px' }}>
        <span>
          In Spanish, the present tense signals an action that is currently
          going on or is habitually performed. There are mainly four differnet
          ways the express the present tense in Spanish, however, we will be
          discussing the <i>simple present tense</i> in this section
        </span>
      </div>
      <br />
      <h1 className='title is-6'>Verb Endings ~ Regular Verbs</h1>
      <span>
        It's fairly simple to conjugate a verb to the present tense in Spanish.
        Review the table below to see the correct verb ending for each subject
        pronoun.
      </span>

      {/* Notification disclaimer */}
      <div class='notification is-info' style={{ marginTop: '10px' }}>
        For a refresher on how conjugation works in Spanish, take a look at{' '}
        <a href='/blog/how-conjugation-works/'>this lesson</a>.
      </div>

      {/* Displays the verb endings table */}
      <PresentTenseRegularVerbsEndingTable />

      <ul style={{ listStyle: 'disc' }}>
        <li>
          To conjugate an -ar verb, remove the infinitive ending (-ar) and add
          the ending that matches the subject.
        </li>
        <li style={{ padding: '5px 0px' }}>
          To conjugate an -er verb, remove the infinitive ending (-er) and add
          the ending that matches the subject.
        </li>
        <li style={{ padding: '5px 0px' }}>
          To conjugate an -ir verb, remove the infinitive ending (-ir) and add
          the ending that matches the subject.
        </li>
      </ul>

      <div>
        <span />
      </div>

      <div className='container'>
        <span />
      </div>
    </Fragment>
  );
};

export default MainSection;
