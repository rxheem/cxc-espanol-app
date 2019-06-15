import React from 'react';

const Audio = props => {
  return (
    <audio src={props.audioSrc} controls className={ props.reset ? 'reset-this': '' } style={props.styles}>
      <div className='alert alert-danger'>
        Your browser does not support the audio element. Try using <a target='_blank' href='https://www.google.com/chrome/'>Chrome!</a>
      </div>
    </audio>
  )
}

export default Audio;
