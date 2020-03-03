import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Navbar.css';
import colorScheme from "../design.js"

import Github from '../Images/github_logo.png'
import LinkedIn from '../Images/linkedin_logo.png'
import { Link } from "react-scroll";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  responsiveNavbar = () => {
    this.setState({ isActive: !this.state.isActive })
    console.log(this.state.isActive)
  };


  render() {
    return (
    <div style={{maxWidth:"100vw"}}>
      <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation" style={{backgroundColor:colorScheme.darkBlue}}>

        <div className="navbar-brand" style={{backgroundColor:"transparent"}}>
          <div className="navbar-item" style={{backgroundColor:"transparent"}}>
            <div style={{color: "white",fontWeight: "bold"}}>
              Brendan Muldowney
            </div>
          </div>
          <a onClick={() => this.responsiveNavbar()} role="button"
             className={"navbar-burger burger" + (this.state.isActive ? "is-active" : "") }
             aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" style={{backgroundColor:"white"}}></span>
            <span aria-hidden="true" style={{backgroundColor:"white"}}></span>
            <span aria-hidden="true" style={{backgroundColor:"white"}}></span>
          </a>
        </div>

        <div id="navbarBasicExample" style={{color:"white", backgroundColor:"transparent"}} className={"navbar-menu" + (this.state.isActive ? "is-active" : "") }>
          <div className="navbar-start">
          <Link  activeClass="active" className="About" to="About" spy={true} smooth={true} duration={500} >
            <div className="navbar-item"  style={{color: "white"}}>
                About
            </div>
          </Link>
          <Link activeClass="active" className="Resume" to="Resume" spy={true} smooth={true} duration={500} >
            <div className="navbar-item" style={{color: "white"}}>
                Resume
            </div>
          </Link>
          <Link activeClass="active" className="Project" to="Project" spy={true} smooth={true} duration={500} >
            <div className="navbar-item" style={{color: "white"}}>
                Projects
            </div>
          </Link>
          <Link activeClass="active" className="Contact" to="Contact" spy={true} smooth={true} duration={500} >
            <div className="navbar-item" style={{color: "white"}}>
                Contact
            </div>
          </Link>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button" href="https://github.com/brendmm" target="_blank" style={{backgroundColor:colorScheme.offWhite, border: "2px solid "+colorScheme.orange}}>
                  <img src={Github} width="30" height="30"/>
                </a>
                <a className="button" href="https://www.linkedin.com/in/brendan-muldowney-892895132/" target="_blank" style={{backgroundColor:colorScheme.offWhite, border: "2px solid "+colorScheme.orange}}>
                  <img src={LinkedIn} width="30" height="30"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}

export default Navbar;
