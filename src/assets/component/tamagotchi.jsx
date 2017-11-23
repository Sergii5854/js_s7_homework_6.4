import React, {PropTypes,  Component } from 'react';

import hello from './../sprite/hello.png';

export default class Tamagotchi extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
        <div class="main">
          <div class="container">
            <div class="inner-container">
              <div class="display" id="display">
                <p>name</p>

                <div class="hi"></div>
              </div>
              <div class="controls">
                <div class="btn" id="a">Action1</div>
                <div class="btn" id="b">Action2</div>
                <div class="btn" id="c">Action3</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};
