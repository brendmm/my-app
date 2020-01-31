import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './MainPage.css';
import Navbar from './Components/Navbar';
import { Router, Route, Link, Switch } from 'react-router'
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Background from './Images/background.png'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="App-header">
        <div className="pinNavbara">
        <Navbar/>
        </div>
        <Switch>
          <Route path="/about">
          <div className="bg-img">
            about
            </div>
          </Route>
          <Route path="/resume">
            Resume
            <div>
            test
            </div>
            <div>
            test
            </div>
          </Route>
          <Route path="/projects">
            projects
          </Route>
          <Route path="/contact">
            contact
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
