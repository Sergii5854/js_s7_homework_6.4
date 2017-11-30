import React, {Component} from 'react'
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

      isHidden: false,
      tamagotchiName: null,

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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange(event) {
    event.preventDefault();
    let tamagotchiName = this.state.tamagotchiName;
    let name = event.target.name;
    let value = event.target.value;

    tamagotchiName = value;

    this.setState({tamagotchiName});
  }

  handleSubmit(event) {
    event.preventDefault();

     if(this.state.tamagotchiName !== null ) {
      console.log(this.state.tamagotchiName);

      this.setState({isHidden: true});
      document.getElementById('gif').src = gif1;
    }else {
      alert("Please set name to your tamagotchi")
    }

  }

  render() {
    let clickBtnSleep = this.state.labelSleep ? 'Sleep' : 'Run';
    let bgColorBtnSleep = this.state.colorSleep ? 'red' : 'green';

    let clickBtnEat = this.state.labelEat ? 'Eat' : 'Play';
    let bgColorBtnEat = this.state.colorEat ? 'grey' : 'saddlebrown';

    let clickBtnWatch = this.state.labelWatch ? 'Watch' : 'Study';
    let bgColorBtnWatch = this.state.colorWatch ? 'blue' : 'purple';

    return (
        <div>
          <div className="params">
            <div
                hidden={this.state.isHidden}
                className="hi"></div>
            <form
                onSubmit={this.handleSubmit}
                hidden={this.state.isHidden}
            >
              <input
                  type="text"
                  name="name"
                  placeholder="Tamagotchi Name"
                  maxLength="30"
                  minLength="1"
                  onChange={this.handleChange}
              />

              <button type="submit" value="Submit">Submit</button>
            </form>


            <p>name : {this.state.tamagotchiName}</p>
          </div>

          <div className='gif-container'>
            <img id='gif' className='active' alt=''/>
          </div>

          <div className='controls'>
            <button className='btn'
                    style={{backgroundColor: bgColorBtnSleep}}
                    onClick={this.sleep}>
              {clickBtnSleep}
            </button>
            <button className='btn'
                    style={{backgroundColor: bgColorBtnEat}}
                    onClick={this.eat}>
              {clickBtnEat}
            </button>
            <button className='btn'
                    style={{backgroundColor: bgColorBtnWatch}}
                    onClick={this.wath}>
              {clickBtnWatch}
            </button>
          </div>
        </div>
    )
  }
}