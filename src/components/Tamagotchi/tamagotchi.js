import React, {PropTypes, Component} from 'react';
import Audio from '../audio/audio';

import Controls from '../gif/gif';

export default class Tamagotchi extends Component {
  render() {
    return (
        <div className="main">
          <div className="container">
            <div className="inner-container">
              <div className="display" id="display">

                <Controls />
              </div>
            </div>
          </div>
          <Audio />
        </div>
    );
  }
};
