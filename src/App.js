import React, { Component } from 'react';
import Home from './views/Home.js'
import About from './views/About.js'
import Contact from './views/Contact.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
