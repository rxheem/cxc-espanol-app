import React from 'react';

// Importing images
import FBIcon from './social_icons/f_logo_RGB-Blue_144.png';
import YTIcon from './social_icons/youtube_social_squircle_red.png';

const MiniSocialView = () => {
  return (
    <div>
      <section id='MiniSocialView'>
        <a href='/' target='_blank'>
          <img src={FBIcon} alt='Facebook icon' className='social-icon' />
        </a>

        <a href='/' target='_blank'>
          <img src={YTIcon} alt='Facebook icon' className='social-icon' />
        </a>
      </section>

      {/* Provides styling for the component */}
      <style jsx>{`
        .social-icon {
          max-height: 25px;
          margin: 5px;
        }

        section {
          text-align: right;
          margin-right: 15px;
        }
      `}</style>
    </div>
  );
};

export default MiniSocialView;
