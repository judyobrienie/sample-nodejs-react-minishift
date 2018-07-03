import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      	  <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Judys React Project</h1>
        </header>
        <p className="App-intro">
	  Good Luck!
          To get started, edit <code>src/App.js</code> and save to reload and push to github.
    </p>
      </div>
    );
  }
}

export default App;
