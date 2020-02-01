import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Resume.css';
import { Document, Page, pdfjs , View } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css';
import throttle from "lodash.throttle"
import pdf from '../Images/Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {width: null}
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

  render() {
    return (
      <div id="row" style={{ width: "100vw", display: "flex", overflow: "hidden"}}>
        <div id="placeholderWrapper" style={{width: "10vw", height: "100vh"}}/>
        <div id="pdfWrapper" style={{width: "80vw", marginTop:"1%"}} ref={(ref) => this.pdfWrapper = ref}>
          <PdfComponent wrapperDivSize={this.state.width} />
        </div>
      </div>
    )
  }
}

class PdfComponent extends Component {
  render() {
    return (
      <div>
        <Document
          file={pdf}
        >
          <Page pageIndex={0} width={this.props.wrapperDivSize} />
        </Document>
      </div>
    )
  }
}

export default Resume
