import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Navbar.css';
import Github from '../Images/github_logo.png'
import LinkedIn from '../Images/linkedin_logo.png'
import { Link } from "react-router-dom";


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
                      about: "#d3d3d3",
                      resume: "transparent",
                      projects: "transparent",
                      contact: "transparent"})

    }
    else if(item === "resume"){
      this.setState({ isActive: false,
                      about: "transparent",
                      resume: "#d3d3d3",
                      projects: "transparent",
                      contact: "transparent"})
    }
    else if(item === "projects"){
      this.setState({ isActive: false,
                      about: "transparent",
                      resume: "transparent",
                      projects: "#d3d3d3",
                      contact: "transparent"})
    }
    else if(item === "contact"){
      this.setState({ isActive: false,
                      about: "transparent",
                      resume: "transparent",
                      projects: "transparent",
                      contact: "#d3d3d3"})
    }

    console.log(item)
  };

  render() {
    return (
    <div>
    <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand" style={{backgroundColor:"white"}}>
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

      <div id="navbarBasicExample" style={{backgroundColor:"white"}} className={"navbar-menu" + (this.state.isActive ? "is-active" : "") }>
        <div className="navbar-start">
          <Link to="/about" onClick={() => this.submitData("about")} style={{backgroundColor:this.state.about}}>
            <div className="navbar-item"  style={{color: "black", backgroundColor:this.state.about}}>
                About
            </div>
          </Link>
          <Link to="/resume" onClick={() => this.submitData("resume")} style={{backgroundColor:this.state.resume}}>
            <div className="navbar-item" style={{color: "black", backgroundColor:this.state.resume}}>
                Resume
            </div>
          </Link>
          <Link to="/projects" onClick={() => this.submitData("projects")} style={{backgroundColor:this.state.projects}}>
            <div className="navbar-item" style={{color: "black", backgroundColor:this.state.projects}}>
                Projects
            </div>
          </Link>
          <Link to="/contact" onClick={() => this.submitData("contact")} style={{backgroundColor:this.state.contact}}>
            <div className="navbar-item" style={{color: "black", backgroundColor:this.state.contact}}>
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
