import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './MainPage.css';
import Navbar from './Components/Navbar';
import { Router, Route, Link, Switch, HashRouter } from 'react-router-dom'
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import Background from './Images/background.png'
import history from './history';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () =>{
    history.push('/#/about')
  }

  render() {
    return (
      <HashRouter basename='/'>
        <div className="App-header">
        <div className="bg-img">
        <div className="pinNavbar">
        <Navbar/>
        </div>
        <Switch>

          <Route path={process.env.PUBLIC_URL + '/about'}>
          <div className="bg-img">

            about.................................................................................................................................................................................................
            </div>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/projects">
            projects
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
        </div>
        </div>
        </HashRouter>
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
