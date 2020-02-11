import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './About.css';
// import { Route } from "react-router";
import headshot from '../Images/Headshot.png'
import software from '../Images/software.png'
import graduate from '../Images/graduate.png'
import location from '../Images/location.png'

import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
// import cpp from '../Images/c++_logo.png'
// import python from '../Images/python_logo.png'
// import react from '../Images/react_logo.png'

// import Skill from '../Components/Skill.js'

import Image from 'react-image-resizer';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      space: "0%",      //changing top padding depending on screen width
      spaceState: 0,     //track if width changes so there is no recursive rerendering
      descibeSW: false,
      descibeV: false,
      descibeB: false
    };
  }

//Determine padding to set
fixSpace = () => {
  if(this.props.space!=this.state.spaceState){
    if(this.props.space === 1){
      this.setState({ space: "5%", spaceState: this.props.space });
    }
    else if(this.props.space === 2){
      this.setState({ space: "10%", spaceState: this.props.space });
    }
    else if(this.props.space === 3){
      this.setState({ space: "20%", spaceState: this.props.space });
    }
    console.log(this.state.space)
  }
}


showSoftware = () => {
  this.setState({descibeSW: !this.state.descibeSW})
}
showBoston = () => {
  this.setState({descibeB: !this.state.descibeB})
}
showVirginia = () => {
  this.setState({descibeV: !this.state.descibeV})
}

descibeSoftware = () => {
    return(
      <SlideDown className='my-dropdown-slidedown'>
      {this.state.descibeSW ?
        <div className="subtitle is-5" style={{padding:"5%",bacakgroundColor:"#F7F8FC"}}>
            Software development is my passion.
             I have had amazing opporunities to
             gain experience is different avenues
             of programming from front end webdesign
             to machine learning and embedded software.
            </div> : null}

      </SlideDown>

    )
}
descibeVirginia = () => {
    return(
      <SlideDown className='my-dropdown-slidedown'>
      {this.state.descibeV ?
        <div className="subtitle is-5" style={{padding:"5%",bacakgroundColor:"#F7F8FC"}}>
          In May 2020, I will be graduating with a degree in Computer Engineering.
          The classes I have taken have taught me an incredible amount and
          prepared me for my future career. Some of my favorite classes were:
          <div  className="subtitle is-6" style={{paddingTop:"5%",paddingLeft:"5%",textAliagn:"center"}}>
          <li>Data Structures and Algorithms</li>
          <li>Embedded Software Design</li>
          <li>Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>Intro to Control Systems</li>
          <li>Network Applications and Design</li>
          </div>
        </div> : null }

      </SlideDown>

    )
}
descibeBoston = () => {
  return(
    <SlideDown className='my-dropdown-slidedown'>
    {this.state.descibeB ?
    <div className="subtitle is-5" style={{padding:"5%",paddingTop:"9%",bacakgroundColor:"#F7F8FC"}}>
          I grew up an hour north of Boston, Massachusettes
          in a town called Newbury. Although I am currently
          a student in Virginia, Boston is definitely my home.
          It is where my friends and family are and where I want
          to be. Despite this, I love to have new expereinece and
          explore new places making me open to working anywhere!
          </div> : null}

    </SlideDown>

  )
}

  render() {
    return (
      <div className = "stripes" style={{fontFamily:"Tahoma, Geneva, sans-serif",maxWidth:"100vw",paddingTop:this.state.space,paddingLeft:"5%",paddingRight:"5%"}}>
        {console.log(this.props)}
        {this.fixSpace()}

        <div className="title is-1 is-center" style={{  fontSize: "calc(50px + 2vmin)"}}>
          <div className="columns">
          <div className="column is-one-third" style={{textAlign:"center"}}>
          About Me
          </div>
          <div className="column" style={{textAlign:"center"}}>
          <div style={{display: "inline-block"}}>
          <img className="is-rounded"src={headshot} width="100%" alt="Placeholder image" style={{float:"left", paddingTop:"4%"}}/>

            </div>
            </div>
            <div className="column  is-one-third" style={{textAlign:"left"}}>
              <div className="subtitle is-3 is-center" onClick={this.showSoftware} style={{ background: "#F7F8FC", borderRadius:"25px", paddingLeft:"15%", display:"inline-block",minWidth:"100%",paddingBottom:"2%", border:"2px solid black"}}>
                <img className="is-rounded"src={software} width="70" alt="Placeholder image" style={{float:"left", paddingTop:"4%", marginRight:"10%"}}/>
                <div style={{marginLeft:"10%"}}>
                  Software <br/> Developer
                </div>
                {this.descibeSoftware()}
              </div>

              <div className="subtitle is-3 is-center" onClick={this.showVirginia} style={{ background: "#F7F8FC", borderRadius:"25px", paddingLeft:"15%",display:"inline-block",minWidth:"100%", marginTop:"2%", border:"2px solid black"}}>
                <img className="is-rounded"src={graduate} width="70" alt="Placeholder image" style={{float:"left", paddingTop:"4%", marginRight:"10%"}}/>
                <div style={{paddingLeft:"10%", marginTop:"0%"}}>
                  Virginia Tech <br/> Alumnus
                </div>
                {this.descibeVirginia()}
              </div>
              <div className="subtitle is-3 is-center" onClick={this.showBoston} style={{ background: "#F7F8FC", borderRadius:"25px", paddingLeft:"15%", paddingBottom:"2%",display:"inline-block",minWidth:"100%", border:"2px solid black"}}>
                <img className="is-rounded"src={location} width="70" alt="Placeholder image" style={{float:"left", paddingTop:"4%", marginRight:"10%"}}/>
                <div style={{marginLeft:"5%", marginTop:"5%"}}>
                  Boston, MA
                </div>
                {this.descibeBoston()}
              </div>
            </div>
            </div>

        </div>

      </div>
    );
  }
}

export default About;
