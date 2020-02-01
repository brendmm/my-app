import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Contact.css';
import Profile from '../Images/Profile.JPG'
import Phone from '../Images/phone.png'
import Email from '../Images/email.png'

class Resume extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="card column is-three-fifths is-offset-one-fifth" style={{marginTop:"15%",background: "linear-gradient(90deg, rgba(21,18,74,1) 0%, rgba(108,9,121,1) 100%, rgba(33,115,72,1) 100%)"}}>
        <div className = "card" style={{margin:"5%"}}>
          <div class="columns">

            <div class="column is-one-quarter" style={{marginLeft:"5%"}}>

                <figure class="image is-128x128">
                    <img src={Profile} alt="Placeholder image" style={{marginTop:"7%",border: "4px solid black"}}/>
                </figure>
            </div>

            <div class="column">
                  <div class="title is-3">
                    Brendan Muldowney
                  </div>
                  <span class="icon" style={{float:"left"}}>
                    <img class="is-rounded"src={Phone} alt="Placeholder image"/>
                  </span>
                  <div class="subtitle is-5">
                    <div class="title is-5" style={{float:"left", marginRight:"2%",  marginLeft:"2%"}}>
                      Phone:
                    </div>
                    978-270-4538
                  </div>
                  <span class="icon" style={{float:"left"}}>
                    <img class="is-rounded"src={Email} alt="Placeholder image"/>
                  </span>
                  <div class="subtitle is-5">
                  <div class="title is-5" style={{float:"left", marginRight:"2%",  marginLeft:"2%"}}>
                    Email:
                  </div>
                  brendmm@vt.edu
                </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Resume
