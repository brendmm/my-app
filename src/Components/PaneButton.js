import React, { Component } from 'react';
import "bulma/css/bulma.css";
// import { Route } from "react-router";
// import headshot from '../Images/Headshot.png'
// import software from '../Images/software.png'
// import graduate from '../Images/graduate.png'
// import location from '../Images/location.png'
import { buttonStyle} from "../design.js"

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const paneStyle = { borderRadius:"25px", paddingLeft:"10%", display:"inline-block",minWidth:"100%",paddingBottom:"2%",  color: "black"}
class PaneButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      space: "0%",      //changing top padding depending on screen width
      spaceState: 0,     //track if width changes so there is no recursive rerendering
      descibe: false,
    };
  }

showData = () => {
  this.setState({descibe: !this.state.descibe})
}

descibeData = (info) => {
    return(
      <SlideDown className='my-dropdown-slidedown'>
      {this.state.descibe ?
        <div className="subtitle is-5" style={{padding:"5%",bacakgroundColor:"#F7F8FC", fontSize:"0.7em"}}>
            {info}
            </div> : null}

      </SlideDown>

    )
}



  render() {
    return (
      <div className="subtitle is-3 is-center" onClick={this.showData} style={{...paneStyle,...buttonStyle}}>
        <img className="is-rounded"src={this.props.src} width="70" alt="Placeholder" style={{float:"left", paddingTop:"4%", marginRight:"10%"}}/>
        <div style={{marginLeft:"10%", fontSize:"1em"}}>
          {this.props.label}
        </div>
        {this.descibeData(this.props.info)}
      </div>
    );
  }
}

export default PaneButton;
