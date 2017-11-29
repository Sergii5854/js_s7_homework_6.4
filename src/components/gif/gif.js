import React, {Component } from 'react'
import gif1 from '../../assets/gif/sleeping.gif'
import gif2 from '../../assets/gif/funk.gif'
import gif3 from '../../assets/gif/feed.gif'
import gif4 from '../../assets/gif/internet.gif'
import gif5 from '../../assets/gif/watchingTV.gif'
import gif6 from '../../assets/gif/study.gif'

export default class GifActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelSleep: true,
      colorSleep: false,
      gifSleep: true,

      labelEat: true,
      colorEat: false,
      gifEat: true,

      labelWatch: true,
      colorWatch: false,
      gifWatch: true,
    };

    this.sleep = this.sleep.bind(this);
    this.eat = this.eat.bind(this);
    this.wath = this.watch.bind(this);
  }

  sleep() {
    this.setState({
      labelSleep: !this.state.labelSleep,
      colorSleep: !this.state.colorSleep,
      gifSleep: !this.state.gifSleep
    })
    let actionBtnSleep = this.state.gifSleep ? gif1 : gif2;
    document.getElementById('gif').src = actionBtnSleep
  }

  eat() {
    this.setState({
      labelEat: !this.state.labelEat,
      colorEat: !this.state.colorEat,
      gifEat: !this.state.gifEat
    })
    let actionBtnEat = this.state.gifEat ? gif3 : gif4;
    document.getElementById('gif').src = actionBtnEat
  }

  watch() {
    this.setState({
      labelWatch: !this.state.labelWatch,
      colorWatch: !this.state.colorWatch,
      gifWatch: !this.state.gifWatch
    })
    let actionBtnWatch = this.state.gifWatch ? gif5 : gif6;
    document.getElementById('gif').src = actionBtnWatch
  }

  render() {
    let clickBtnSleep =  this.state.labelSleep ? 'Sleep' : 'Run';
    let bgColorBtnSleep = this.state.colorSleep ? 'red' : 'green';

    let clickBtnEat =  this.state.labelEat? 'Eat' : 'Play';
    let bgColorBtnEat = this.state.colorEat ? 'grey' : 'saddlebrown';

    let clickBtnWatch =  this.state.labelWatch ? 'Watch' : 'Study';
    let bgColorBtnWatch = this.state.colorWatch ? 'blue' : 'purple';

    return (
        <div>
          <div className='gif-container'>
            <img id='gif' className='active' alt=''/>
          </div>

          <div className='controls'>
            <button className='btn' style={{backgroundColor: bgColorBtnSleep}} onClick={this.sleep} >{clickBtnSleep}</button>
            <button  className='btn' style={{backgroundColor: bgColorBtnEat}} onClick={this.eat} > {clickBtnEat} </button>
            <button  className='btn' style={{backgroundColor: bgColorBtnWatch}} onClick={this.wath} > {clickBtnWatch} </button>
          </div>
        </div>
    )
  }
}