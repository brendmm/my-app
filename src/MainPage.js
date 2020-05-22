import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './MainPage.css';
import {colorScheme, buttonStyle} from "./design.js"

import Navbar from './Components/Navbar';
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

import { Element } from "react-scroll";

class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      collapsed: 1
    };
  }

    handleWindowResize = () => {
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
      console.log(colorScheme)
      return (
          <div className="App-header">
            <Navbar/>
            <Element name="About" className="element">
                <About space={this.state.collapsed} />
            </Element>
            <Element name="Resume" className="element">
              <Resume space={this.state.collapsed}/>
            </Element>
            <Element name="Project" className="element">
                <Project space={this.state.collapsed}/>
            </Element>
            <Element name="Contact" className="element">
              <Contact space={this.state.collapsed}/>
            </Element>
          </div>
      );
    }
}

export default Home;
