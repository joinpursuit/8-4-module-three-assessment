import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <h2>Welcome to GhibliAppl</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/movies'} className="nav-link">Contact</Link></li>
          <li><Link to={'/about'} className="nav-link">About</Link></li>
        </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Movies' component={Movies} />
            <Route path='/People' component={People} />
            <Route path='/Locations' component={Locations} />
        </Switch>
      </div>
    </Router>
    );
  }
  }
  

export default App;
