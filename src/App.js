import React, { Component } from 'react';
import logo from './images/glyph-green.png';
import { GetCharacter } from './components/CharGen.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="maaaAAAaaagiiic" />
        <h2>OD<span style={{color: 'red' }}>D&D Char</span> Gen</h2>
      </div>
        <div className="App-intro">
          <GetCharacter />
        </div>
      </div>
    );
  }
}

export default App;
