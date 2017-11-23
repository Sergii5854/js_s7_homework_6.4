import React, {Component } from 'react';
import audio from './../audio/audio.mp3'

export default class Audio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      pauseSong: true,
      songs:  audio

    }
    this.playSong = this.playSong.bind(this)
    this.pauseSong = this.pauseSong.bind(this)
  }



  playSong() {
    this.setState({
      playing: true,
      pauseSong: true

    })
  }

  pauseSong() {
      this.setState({
        playing: false,
        pauseSong: true

      })
    }
  render() {
    return (
        <div className="wrap">
          <audio type="audio/mpeg"  id="audio_div" src={audio} ></audio>
          <button className="btn" onClick={this.state.playing ? this.pauseSong : this.playSong}>Play/Pause</button>
        </div>
    );
  }
};


