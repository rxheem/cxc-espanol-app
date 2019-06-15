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

      <PresentTenseRegularVerbsEndingTable />
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
