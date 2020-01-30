import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './MainPage.css';
import Navbar from './Components/Navbar';
import { Router, Route, Link, Switch } from 'react-router'
import About from "./Pages/About";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="App-header">
        <Navbar/>
        <Switch>
          <Route path="/about">
            about
          </Route>
          <Route path="/resume">
            resume
          </Route>
          <Route path="/projects">
            projects
          </Route>
        </Switch>
        </div>
    );
  }
}

export default Home;


/*
<div className="App-header">
      <Route
        exact
        path="/"
        render={<About/>}
      />
    <Navbar/>
    </div>
    */
