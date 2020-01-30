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
      isActive: false
    };
  }

  responsiveNavbar = () => {
    this.setState({ isActive: !this.state.isActive })
    console.log(this.state.isActive)
  };

  submitData = () => {
    console.log(this.state.isActive)
  };

  render() {
    return (
    <div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="my_Label">
            Brendan Muldowney
          </div>
        </div>
        <a onClick={() => this.responsiveNavbar()} role="button"
           className={"navbar-burger burger" + (this.state.isActive ? "is-active" : "") }
           aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={"navbar-menu" + (this.state.isActive ? "is-active" : "") }>
        <div className="navbar-start">
            <a className="navbar-item" onClick={() => this.submitData()}>
              <Link to="/about">
                About
              </Link>
            </a>
          <a className="navbar-item">
            <Link to="/resume">
              Resume
            </Link>
          </a>
          <a className="navbar-item">
            <Link to="/projects">
              Projects
            </Link>
          </a>
          <a className="navbar-item">
            Contact
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-link is-outlined">
                <img src={Github} width="30" height="30"/>
              </a>
              <a className="button is-link is-outlined">
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
