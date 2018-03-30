import React, { Component } from 'react';
import Home from './views/Home.js'
import About from './views/About.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
