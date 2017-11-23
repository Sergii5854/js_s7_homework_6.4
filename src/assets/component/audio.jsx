import React, {Component } from 'react';
import audio from './../audio/audio.mp3'

export default class Audio extends Component {

  render() {
    return (
          <audio type="audio/mpeg"  id="audio_div" src={audio} autoPlay="true"></audio>
    );
  }
};


