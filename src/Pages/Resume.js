import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Resume.css';
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import throttle from "lodash.throttle"
import pdf from '../Images/Resume.pdf'
import colorScheme from "../design.js"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
              <div  className="subtitle is-3"onClick={this.onResumeClick} style={{borderRadius:"25px",border:"4px solid "+colorScheme.orange,textAlign:"center",width:"70%", minaHeight:"20vh",marginLeft:"15%",marginRight:"15%", paddingTop:"5%",paddingBottom:"5%",color: "#000000",fontSize:""}}>
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
