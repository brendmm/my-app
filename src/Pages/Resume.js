import React, { Component } from 'react';
import "bulma/css/bulma.css";
import {colorScheme, buttonStyle} from "../design.js"

import pdf from '../Images/Resume.pdf'


const resumeStyle = {borderRadius:"25px",textAlign:"center",width:"70%", minaHeight:"20vh",marginLeft:"15%",marginRight:"15%", paddingTop:"5%",paddingBottom:"5%"}
class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onResumeClick() {
    window.open(pdf);
  }

  render() {
    return (
      <div style={{backgroundColor:colorScheme.grayBlue}}>
        <div className="column" style={{backgroundColor:colorScheme.offWhite, paddingTop:"7vh",paddingBottom:"7vh", borderRadius:"0px 4em 4em 0px "}}>
          <div className="columns">
            <div className = "column is-half is-offset-one-quarter">
              <div  className="subtitle is-3"onClick={this.onResumeClick} style={{...resumeStyle,...buttonStyle}} >
                View Resume
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume
