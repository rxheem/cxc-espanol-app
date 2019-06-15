import React from 'react';

const Audio = props => {
  return (
    <audio src={props.audioSrc} controls className={ props.reset ? 'reset-this': '' } style={props.styles}>
      <div />
    </audio>
  )
}

export default Audio;
