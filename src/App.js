import React, { Component } from 'react';
import Home from './views/Home.js'
import About from './views/About.js'
import Contact from './views/Contact.js'
import {Route, Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <div className="NavBar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        
            <Route exact={true} path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact} />
            
      </div>
    );
  }
}

export default App;
