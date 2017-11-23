import React, {PropTypes,  Component } from 'react';
import Audio from './audio';
import GifAction from './gif';

export default class Tamagotchi extends Component {
  constructor(props) {
    super(props);
    this.name = prompt("What is your Pet name ?", "SpongeBob");
    this.happiness = 10;
    this.bellyful = 10; // bellyful - ситість
  }


  render() {
    return (
        <div class="main">
          <Audio />

          <div class="container">
            <div class="inner-container">
              <div class="display" id="display">
                <p>name :  {this.name}</p>
                <p>happiness : {this.happiness}</p>
                <p>bellyful : {this.bellyful}</p>

                <div class="hi"></div>
              <GifAction />
              </div>


            </div>
          </div>
        </div>
    );
  }
};
