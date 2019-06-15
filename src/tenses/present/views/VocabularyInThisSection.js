import React, { Fragment } from 'react';

import CommonVerbsAudio from '../audio/common-adverbs-used-with-simple-present-tense.mp3';

// Imports audio component
import Audio from '../../../common/Audio';

const VocabularyInThisSection = props => {
  return (
    <aside>
      {/* Commonly Used Adverbs */}
      <section>
        <h1 className='subtitle has-text-info'>Commonly Used Adverbs</h1>

        <ul style={{ listStyle: 'disc', paddingLeft: '30px' }}>
          <li>normalmente</li>
          <li>siempre</li>
          <li>a menudo</li>
          <li>generalmente</li>
          <li>a aveces</li>
          <li>ahora</li>
        </ul>

        {/* Audio playback of the above words */}
        <Audio
          audioSrc={CommonVerbsAudio}
          styles={{ padding: '0 20px', marginTop: '10px' }}
        />
      </section>
    </aside>
  );
};

export default VocabularyInThisSection;
