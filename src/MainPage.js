import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './MainPage.css';

import Navbar from './Components/Navbar';
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

import Background from './Images/background.png'
import { Element, animateScroll as scroll } from "react-scroll";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: 1
    };
  }

    handleWindowResize = () => {
      console.log("here")
      if(this.state.collapsed!==1 && window.innerWidth>1023){
        this.setState({ collapsed: 1 });
        console.log(this.state.collapsed)
      }
      else if(this.state.collapsed!==2 && window.innerWidth<1023 && window.innerWidth>500){
        this.setState({ collapsed: 2 });
        console.log(this.state.collapsed)
      }
      else if(this.state.collapsed!==3 && window.innerWidth<500){
        this.setState({ collapsed: 3 });
        console.log(this.state.collapsed)
      }
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowResize);
    }

  render() {
    return (
      // <HashRouter basename='/'>
      <div>
        <div className="App-header">
        <div  style={{backgroundColor:"#F7F8FC"}}>

          <div className="pinNavbar">
          <Navbar/>
          </div>
        </div>

        <Element name="About" className="element"  style={{backgroundColor:"#F7F8FC"}}>
            <About space={this.state.collapsed} />
        </Element>
        <Element name="Resume" className="element" style={{backgroundColor:"#F7F8FC"}}>
          <Resume space={this.state.collapsed}/>
        </Element>
        <Element name="Project" className="element" style={{backgroundColor:"#F7F8FC"}}>
            <Project space={this.state.collapsed}/>
        </Element>
        <Element name="space" className="element" className="bg-img">

        </Element>
        <Element name="Contact" className="element" style={{backgroundColor:"#F7F8FC"}}>
          <Contact space={this.state.collapsed}/>
        </Element>
        </div>
        </div>

        // </HashRouter>
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

    // <Switch >
    //   <Route path="/resume">
    //     <Resume/>
    //   </Route>
    //   <Route path="/projects">
    //     projects
    //   </Route>
    //   <Route path="/contact">
    //     <Contact/>
    //   </Route>
    //   <Route path="/">
    //     <About/>
    //   </Route>
    // </Switch>
