import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Navbar.css';
import Github from '../Images/github_logo.png'
import LinkedIn from '../Images/linkedin_logo.png'
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

// const [isActive, setActive] = React.useState(false);

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      about: "transparent",
      resume: "transparent",
      projects: "transparent",
      contact: "transparent"
    };
  }

  responsiveNavbar = () => {
    this.setState({ isActive: !this.state.isActive })
    console.log(this.state.isActive)
  };

  submitData = (item) => {
    if(item === "about"){
      this.setState({ isActive: false,
                      about: "#02012B",
                      resume: "transparent",
                      projects: "transparent",
                      contact: "transparent"})

    }
    else if(item === "resume"){
      this.setState({ isActive: false,
                      about: "transparent",
                      resume: "#02012B",
                      projects: "transparent",
                      contact: "transparent"})
    }
    else if(item === "projects"){
      this.setState({ isActive: false,
                      about: "transparent",
                      resume: "transparent",
                      projects: "#02012B",
                      contact: "transparent"})
    }
    else if(item === "contact"){
      this.setState({ isActive: false,
                      about: "transparent",
                      resume: "transparent",
                      projects: "transparent",
                      contact: "#02012B"})
    }

    console.log(item)
  };

  render() {
    return (
    <div className="background">
    <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="my_Label">
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

      <div id="navbarBasicExample" style={{backgrounadColor:"#0f0f0f", color:"white"}} className={"navbar-menu" + (this.state.isActive ? "is-active" : "") }>
        <div className="navbar-start">
        <Link onClick={() => this.submitData("about")} activeClass="active" className="About" to="About" spy={true} smooth={true} duration={500} >
          <div className="navbar-item"  style={{color: "white", backgroundColor:this.state.about}}>
              About
          </div>
        </Link>
        <Link onClick={() => this.submitData("resume")} activeClass="active" className="Resume" to="Resume" spy={true} smooth={true} duration={500} >
          <div className="navbar-item" style={{color: "white", backgroundColor:this.state.resume}}>
              Resume
          </div>
        </Link>
        <Link onClick={() => this.submitData("projects")} activeClass="active" className="Project" to="Project" spy={true} smooth={true} duration={500} >
          <div className="navbar-item" style={{color: "white", backgroundColor:this.state.projects}}>
              Projects
          </div>
        </Link>
        <Link onClick={() => this.submitData("contact")} activeClass="active" className="Contact" to="Contact" spy={true} smooth={true} duration={500} >
          <div className="navbar-item" style={{color: "white", backgroundColor:this.state.contact}}>
              Contact
          </div>
        </Link>

        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-link is-outlined" href="https://github.com/brendmm" target="_blank" style={{backgroundColor:"white"}}>
                <img src={Github} width="30" height="30"/>
              </a>
              <a className="button is-link is-outlined" href="https://www.linkedin.com/in/brendan-muldowney-892895132/" target="_blank" style={{backgroundColor:"white"}}>
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


// <Link to="/" onClick={() => this.submitData("about")} style={{backgroundColor:this.state.about}}>
//   <div className="navbar-item"  style={{color: "white", backgroundColor:this.state.about}}>
//       About
//   </div>
// </Link>
// <Link to="/resume" onClick={() => this.submitData("resume")} style={{backgroundColor:this.state.resume}}>
//   <div className="navbar-item" style={{color: "white", backgroundColor:this.state.resume}}>
//       Resume
//   </div>
// </Link>
// <Link to="/projects" onClick={() => this.submitData("projects")} style={{backgroundColor:this.state.projects}}>
//   <div className="navbar-item" style={{color: "white", backgroundColor:this.state.projects}}>
//       Projects
//   </div>
// </Link>
// <Link to="/contact" onClick={() => this.submitData("contact")} style={{backgroundColor:this.state.contact}}>
//   <div className="navbar-item" style={{color: "white", backgroundColor:this.state.contact}}>
//       Contact
//   </div>
// </Link>
