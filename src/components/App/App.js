import React, { Component } from 'react';
import logo from '../../assets/logo/logo.svg';
import './App.css';
import Tamagotchi from "./../Tamagotchi/tamagotchi.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Tamagotchi</h1>
        </header>
        <Tamagotchi />
      </div>
    );
  }
}

export default App;
