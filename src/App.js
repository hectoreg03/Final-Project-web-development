
import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Places from './components/Places';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App {

  

  render(){
    return (
      
    <Router>
      <div className="App">
        <Navbar/>
      
        <div>

          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/places" component={Places} />
        </div>
      </div>
      
  </Router>
    );
  }
}

export default App;