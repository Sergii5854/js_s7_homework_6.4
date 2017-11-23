import React, {Component } from 'react';
import gif1 from './../gif/feed.gif';
import gif2 from './../gif/funk.gif';
import gif3 from './../gif/internet.gif';
import gif4 from './../gif/sleeping.gif';
import gif5 from './../gif/study.gif';
import gif6 from './../gif/watchingTV.gif';

export default class GifActions extends Component {
  constructor(props) {
    super(props)

    this.state = {

      labelA: true,
      colorA: false,
      actionA: true,

      labelB: true,
      colorB: false,
      actionB: true,

      labelC: true,
      colorC: false,
      actionC: true,
    };


    this.sleep = this.sleep.bind(this)
    this.eat = this.eat.bind(this)
    this.wathTV = this.watchTV.bind(this)
  }


  sleep() {
    this.setState({
      colorA: !this.state.colorA,
      labelA: !this.state.labelA,
      actionA: !this.state.actionA
    })
    let action = this.state.actionA ? gif1 : gif1;
    document.getElementById("gif").src = action;
  }

  eat() {
    this.setState({
      colorB: !this.state.colorB,
      labelB: !this.state.labelB,
      actionB: !this.state.actionB
    })
    let action2 = this.state.actionB ? gif4 : gif3;
    document.getElementById("gif").src = action2;
  }

  watchTV() {
    this.setState({
      colorC: !this.state.colorC,
      labelC: !this.state.labelC,
      actionC: !this.state.actionC
    })
    let action3 = this.state.actionC ? gif5 : gif6;
    document.getElementById("gif").src = action3;
  }

  render() {
    let bgColor = this.state.colorA ? "red" : "green";
    let click =  this.state.labelA ? 'Sleep' : 'Awake';
     let action = this.state.actionA ? gif1 : gif2;

    let bgColor2 = this.state.colorB ? "red" : "green";
    let click2 =  this.state.labelB? 'Eat' : 'Play';
    let action2 = this.state.actionB ? gif3 : gif4;

    let bgColor3 = this.state.colorC ? "red" : "green";
    let click3 =  this.state.labelC ? 'Watch' : 'Go gym';
    let action3 = this.state.actionC ? gif5 : gif6;
    return (
      <div>

        <div className="gif-container">
          <img id="gif" className="active" src={action} />

        </div>

        <div className="controls">
          <button id="a" className="btn" style={{backgroundColor: bgColor}} onClick={this.sleep} >{click}</button>
          <button id="b" className="btn" style={{backgroundColor: bgColor2}} onClick={this.eat} > {click2} </button>
          <button id="c" className="btn" style={{backgroundColor: bgColor3}} onClick={this.wathTV} > {click3} </button>
        </div>

      </div>
    );
  }
};
