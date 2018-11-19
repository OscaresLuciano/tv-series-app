import React, { Component } from 'react';
import Main from '../Main'
import './App.css';
import 'whatwg-fetch'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Lista de Series de TV</h1>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;