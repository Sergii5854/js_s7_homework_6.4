import React, {PropTypes,  Component } from 'react';


export default class Tamagotchi extends Component {
  constructor(props) {
    super(props)
    this.name = prompt("What is your Pet name ?", "Malush");
    this.happiness = 10;
    this.bellyful = 10; // bellyful - ситість
  }



  render() {
    return (
        <div class="main">
          <div class="container">
            <div class="inner-container">
              <div class="display" id="display">
                <p>name : {this.name}</p>
                <p>happiness : {this.happiness}</p>
                <p>bellyful : {this.bellyful}</p>

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
