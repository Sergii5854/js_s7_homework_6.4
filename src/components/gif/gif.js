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
      warn: '',
      sleapInfo: '',
      speadInfo: '',
      feedInfo: '',
      happinessInfo: '',
      workInfo: '',
      relaxInfo: '',

      isHidden: false,
      tamagotchiName: null,
      propForGif: false,

      sleap: this.sleap ? this.sleap : Math.floor(Math.random() * 100) + 20,
      spead: this.spead ? this.spead : Math.floor(Math.random() * 100) + 20,

      feed: this.feed ? this.feed : Math.floor(Math.random() * 100) + 20,
      happiness: this.happiness ? this.happiness : Math.floor(Math.random() * 100) + 20,

      work: this.work ? this.work : Math.floor(Math.random() * 100) + 20,
      relax: this.relax ? this.relax : Math.floor(Math.random() * 100) + 20,

      labelSleep: true,
      colorSleep: false,

      labelEat: true,
      colorEat: false,

      labelWatch: true,
      colorWatch: false,
    };

    this.sleep = this.sleep.bind(this);
    this.eat = this.eat.bind(this);
    this.wath = this.watch.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.controlsChange = this.controlsChange.bind(this);
  }

  controlsChange() {
    const DEAD = () => {
      this.setState({
        warn: "sorry, you are dead ",
        isHidden: !this.state.isHidden
      });

      setTimeout(function () {
        window.location.reload()
      }, 2000);
    };
//sleap
    if (this.state.sleap < 10) {
      this.setState({sleapInfo: " I want to sleap "})
    } else {
      this.setState({sleapInfo: ''})
    }
    if (this.state.sleap <= 0) {
      DEAD()
    }
    //spead
    if (this.state.spead < 10) {
      this.setState({speadInfo: [" I want to run like Forest  "]})
    } else {
      this.setState({speadInfo: ''})
    }
    if (this.state.spead <= 0) {
      DEAD()
    }
    //feed
    if (this.state.feed < 10) {
      this.setState({feedInfo: " feed me, please "})
    } else {
      this.setState({feedInfo: ''})
    }
    if (this.state.feed <= 0) {
      DEAD()
    }
    //happiness
    if (this.state.happiness < 10) {
      this.setState({happinessInfo: " Please, play with me "})
    } else {
      this.setState({happinessInfo: ''})
    }
    if (this.state.happiness <= 0) {
      DEAD()
    }
    //work
    if (this.state.work < 10) {
      this.setState({workInfo: " we need to work "})
    } else {
      this.setState({workInfo: ''})
    }
    if (this.state.work <= 0) {
      DEAD()
    }
    //relax
    if (this.state.relax < 10) {
      this.setState({relaxInfo: " we need relax  "})
    } else {
      this.setState({relaxInfo: ''})
    }
    if (this.state.relax <= 0) {
      DEAD()
    }
  }

  sleep() {
    this.controlsChange();
    if (this.state.labelSleep === true) {
      this.setState({
        sleap: this.state.sleap + Math.floor(Math.random() * 4) - 1
      })
    } else {
      this.setState({
        spead: this.state.spead + Math.floor(Math.random() * 4) - 1,
        feed: this.state.feed - Math.floor(Math.random() * 4) - 1,
        happiness: this.state.happiness + Math.floor(Math.random() * 4) - 1
      })
    }
    let actionBtnSleep = this.state.gifSleep ? gif1 : gif2;
    this.setState({
      labelSleep: !this.state.labelSleep,
      colorSleep: !this.state.colorSleep,
      gifSleep: !this.state.gifSleep,
      propForGif: actionBtnSleep
    });
  }

  eat() {
    this.controlsChange();
    if (this.state.labelEat === true) {

      this.setState({
        feed: this.state.feed + Math.floor(Math.random() * 4) - 1,
        spead: this.state.spead - Math.floor(Math.random() * 4) - 1,
        sleap: this.state.sleap - Math.floor(Math.random() * 4) - 1

      })
    } else {
      this.setState({
        spead: this.state.spead - Math.floor(Math.random() * 4) - 1,
        work: this.state.feed - Math.floor(Math.random() * 4) - 1,
        happiness: this.state.happiness + Math.floor(Math.random() * 4) - 1
      })
    }
    let actionBtnEat = this.state.gifEat ? gif3 : gif4;
    this.setState({
      labelEat: !this.state.labelEat,
      colorEat: !this.state.colorEat,
      gifEat: !this.state.gifEat,
      propForGif: actionBtnEat
    });
  }

  watch() {
    this.controlsChange();
    if (this.state.labelWatch === true) {
      this.setState({
        relax: this.state.relax + Math.floor(Math.random() * 4) - 1,
        feed: this.state.feed - Math.floor(Math.random() * 4) - 1,
        work: this.state.feed - Math.floor(Math.random() * 2) - 1
      })
    } else {
      this.setState({
        spead: this.state.spead - Math.floor(Math.random() * 4) - 1,
        feed: this.state.feed - Math.floor(Math.random() * 4) - 1,
        work: this.state.feed - Math.floor(Math.random() * 4) - 1,
        happiness: this.state.happiness + Math.floor(Math.random() * 4) - 1
      })
    }
    let actionBtnWatch = this.state.gifWatch ? gif5 : gif6;
    this.setState({
      labelWatch: !this.state.labelWatch,
      colorWatch: !this.state.colorWatch,
      gifWatch: !this.state.gifWatch,
      propForGif: actionBtnWatch
    })
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

    if (this.state.tamagotchiName !== null) {
      console.log(this.state.tamagotchiName);

      this.setState({isHidden: true});
      document.getElementById('gif').src = gif1;
    } else {
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
                  maxLength="15"
                  minLength="2"
                  onChange={this.handleChange}
              />

              <button type="submit" value="Submit">Submit</button>
            </form>


            <p className="stats">name : {this.state.tamagotchiName}</p>
            <p className="alert">{this.state.warn}</p>
            <p className="info">
              {this.state.sleapInfo}
              {this.state.speadInfo}
              {this.state.feedInfo}
              {this.state.happinessInfo}
              {this.state.workInfo}
              {this.state.relaxInfo}</p>

            <div className='stats__wrap'>
              <p hidden={!this.state.isHidden} className="stats">sleap : {this.state.sleap}</p>
              <p hidden={!this.state.isHidden} className="stats">spead : {this.state.spead}</p>
              <p hidden={!this.state.isHidden} className="stats">feed : {this.state.feed}</p>
              <p hidden={!this.state.isHidden} className="stats">happiness : {this.state.happiness}</p>
              <p hidden={!this.state.isHidden} className="stats">work : {this.state.work}</p>
              <p hidden={!this.state.isHidden} className="stats">relax : {this.state.relax}</p>
            </div>
          </div>

          <div className='gif-container'
               src={this.propForGif}
               hidden={!this.state.isHidden}>
            <img
                id='gif'
                className='active'
                alt='Gif animation'
                src={this.state.propForGif}/>
          </div>

          <div className='controls'

               hidden={!this.state.isHidden}>
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


