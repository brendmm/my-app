import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Resume.css';
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import throttle from "lodash.throttle"
import pdf from '../Images/Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {width: null,
      space: "0%",
      spaceState: 0,
      viewPdf: false}
  }

  componentDidMount () {
    this.setDivSize()
    window.addEventListener("resize", throttle(this.setDivSize, 500))
  }

  componentWillUnmount () {
    window.removeEventListener("resize", throttle(this.setDivSize, 500))
  }

  setDivSize = () => {
    this.setState({width: this.pdfWrapper.getBoundingClientRect().width})
  }

  fixSpace = () => {
    if(this.props.space!=this.state.spaceState){
      if(this.props.space === 1){
        this.setState({ space: "5%", spaceState: this.props.space });
      }
      else if(this.props.space === 2){
        this.setState({ space: "10%", spaceState: this.props.space });
      }
      else if(this.props.space === 3){
        this.setState({ space: "30%", spaceState: this.props.space });
      }
      console.log(this.state.space)
    }
  }

  onResumeClick() {
    window.open(pdf);
  }

  viewResume = () => {
    this.setState({ viewPdf: !this.state.viewPdf });
  }

  displayResume = () =>{
    if(this.state.viewPdf){
    return(
      <PdfComponent wrapperDivSize={this.state.width} />
    )
  }
  }

  render() {
    return (
      <div className="column" style={{backgroundColor:"transparent",paddingTop:this.state.space}}>
        {console.log(this.props)}
        {this.fixSpace()}

        <div className="columns">
          <div className = "column is-half" style={{marginBottom:"1%"}}>
            <div className="button is-link" onClick={this.onResumeClick} style={{width:"70%", minHeight:"40%",marginLeft:"15%",marginRight:"15%"}}>Open PDF Viewer</div>
          </div>
          <div className = "column is-half" style={{marginBottom:"1%"}}>
            <div className="button is-link" onClick={this.viewResume} style={{width:"70%", minHeight:"40%",marginLeft:"15%",marginRight:"15%"}}>Open PDF Below</div>
          </div>
          </div>
          <div id="row" style={{ maxWidth: "100vw", display: "flex", overflow: "hidden"}}>
          <div id="placeholderWrapper" style={{minWidth: "7vw"}}/>

            <div id="pdfWrapper" style={{minWidth: "80vw", marginTop:"1%"}} ref={(ref) => this.pdfWrapper = ref}>
            {this.displayResume()}
            </div>
          </div>
      </div>
    )
  }
}

class PdfComponent extends Component {


  render() {
    return (
      <Document
        file={pdf}
      >
        <Page pageIndex={0} width={this.props.wrapperDivSize} />
      </Document>
    )
  }
}

export default Resume
