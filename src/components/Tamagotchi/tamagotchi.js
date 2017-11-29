import React, {PropTypes, Component} from 'react';
import Audio from '../audio/audio';
import Welcome from '../welcome/welcome';
import GifAction from '../gif/gif';

export default class Tamagotchi extends Component {
  render() {
    return (
        <div className="main">
          <div className="container">
            <div className="inner-container">
              <div className="display" id="display">
                <Welcome />

                <GifAction />
              </div>
            </div>
          </div>
          <Audio />
        </div>
    );
  }
};
