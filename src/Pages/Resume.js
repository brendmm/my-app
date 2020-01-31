import React, { Component } from 'react';
import "bulma/css/bulma.css";
import { Document, Page } from 'react-pdf'
import resume from '../Images/Resume.pdf'

class Resume extends Component {
  state = {
    totalPages: null,
  }

  onDocumentLoadSuccess = (document) => {
    const { numPages } = document;
    this.setState({
      totalPages: numPages
    });
  };

  render() {
    const { totalPages } = this.state;

    return (
      <Document
      file={resume}
      onLoadSuccess={this.onDocumentLoadSuccess}
      onLoadError={(error) => {
        console.error("Load error")
        console.error(error)
        // debugger
      }}
      onSourceSuccess={(success) => {
        console.log("Source success")
        console.log(success)
        // debugger
      }}
      onLoadError={(error) => {
        console.error("Load error")
        console.error(error)
      }}
      onSourceError={(error) => {
        console.error("Source error")
        console.error(error)
        // debugger
      }}
      >
        {Array.from(
          new Array(totalPages),
          (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
          ),
        )}
      </Document>
    );

}
}
export default Resume;
