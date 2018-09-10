import React, { Component } from 'react';
import Header from './components/header/header';
import Body from './components/body/body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
