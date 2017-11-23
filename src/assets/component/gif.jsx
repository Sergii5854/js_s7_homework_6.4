import React, {Component } from 'react';
import gif1 from './../gif/feed.gif'
import gif2 from './../gif/funk.gif'

export default class GifActions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color_black: true,
      label: true,
      labelA: true,
      colorA: false,
      labelB: true,
      colorB: false,
      labelC: true,
      colorC: false,
    }


    this.sleep = this.sleep.bind(this)
    this.eat = this.eat.bind(this)
    this.wathTV = this.watchTV.bind(this)
  }


  sleep() {
    this.setState({
      colorA: !this.state.colorA,
      labelA: !this.state.labelA
    })
  }

  eat() {
    this.setState({
      colorB: !this.state.colorB,
      labelB: !this.state.labelB
    })
  }

  watchTV() {
    this.setState({
      colorC: !this.state.colorC,
      labelC: !this.state.labelC
    })
  }

  render() {
    let bgColor = this.state.colorA ? "red" : "green"
    let click =  this.state.labelA ? 'Sleep' : 'Awake'

    let bgColor2 = this.state.colorB ? "red" : "green"
    let click2 =  this.state.labelB? 'Eat' : 'Play'

    let bgColor3 = this.state.colorC ? "red" : "green"
    let click3 =  this.state.labelC ? 'Watch' : 'Go gym'
    return (
      <div>

        <div className="controls">
          <button id="a" className="btn" style={{backgroundColor: bgColor}} onClick={this.sleep} >{click}</button>
          <button id="b" className="btn" style={{backgroundColor: bgColor2}} onClick={this.eat} > {click2} </button>
          <button id="c" className="btn" style={{backgroundColor: bgColor3}} onClick={this.wathTV} > {click3} </button>
        </div>

      </div>
    );
  }
};
