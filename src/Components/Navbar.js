import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Navbar.css';
import Github from '../Images/github_logo.png'
import LinkedIn from '../Images/linkedin_logo.png'
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-item">
      <div className="my_Label">
        Brendan Muldowney
      </div>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            About
          </a>

          <a class="navbar-item">
            Resume
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Projects
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider"/>
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
          <a class="navbar-item">
            Contact Me
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-link is-outlined">
                <img src={Github} width="30" height="30"/>
              </a>
              <a class="button is-link is-outlined">
                <img src={LinkedIn} width="30" height="30"/>
              </a>
            </div>
          </div>
          <div class="navbar-item">
          <div className = "navbar_Spacing">
          test
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
