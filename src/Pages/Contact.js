import React, { Component } from 'react';
import "bulma/css/bulma.css";
import Phone from '../Images/phone.png'
import Email from '../Images/email.png'
import {colorScheme} from "../design.js"

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (

    <div style={{backgroundColor:colorScheme.offWhite,minHeight:"100vh",paddingTop:"10vh"}}>
      <div className="card column is-6 is-offset-3" style={{backgroundColor:"transparent",bordear:"5px black solid",borderRadius:"25px",marginTop:"15%",boxShadow: "0px 0px 0px"}}>

        <div className = "card column is-12 is-offset-1" style={{backgroundColor:"transparent",paddingTop:"5%",paddingBottom:"5%",boxShadow: "0px 0px 0px",borderRadius:"25px"}}>

                  <div className="title is-3" style={{textAlign:"center"}}>
                  Questions or Feedback?

                  Contact me!

                  </div>
                  <hr style={{border:"1px solid black"}}/>

                  <div className="columns">
                  <div className="column is-half">
                  <span className="icon" style={{float:"left"}}>
                    <img className="is-rounded"src={Phone} alt="Placeholder"/>
                  </span>
                  <div className="subtitle is-5" >
                    <div className="title is-5" style={{float:"left", marginRight:"2%",  marginLeft:"2%"}}>
                      Phone:
                    </div>
                    978-270-4538
                  </div>
                  </div>
                  <div className="column is-two-thirds">
                  <span className="icon" style={{float:"left"}}>
                    <img className="is-rounded"src={Email} alt="Placeholder"/>
                  </span>
                  <div className="subtitle is-5" >
                  <div className="title is-5" style={{float:"left", marginRight:"2%",  marginLeft:"2%"}}>
                    Email:
                  </div>
                  bmuldow@gmail.com
                </div>
                </div>
                </div>

        </div>

      </div>
    </div>

    )
  }
}

export default Resume
