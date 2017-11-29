import React, {Component} from 'react';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.name = prompt("What is your Pet name ?", "SpongeBob");
  }

  render() {
    return (
        <div>
          <p>name : {this.name}</p>
          <div className="hi"></div>
        </div>

    );
  }
};
