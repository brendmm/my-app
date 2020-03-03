import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './About.css';
// import { Route } from "react-router";
import headshot from '../Images/Headshot.png'
import software from '../Images/software.png'
import graduate from '../Images/graduate.png'
import location from '../Images/location.png'
import PaneButton from '../Components/PaneButton'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import colorScheme from "../design.js"


import Image from 'react-image-resizer';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      space: "0%",      //changing top padding depending on screen width
      spaceState: 0,     //track if width changes so there is no recursive rerendering
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


  render() {
    return (
      <div style={{backgroundColor:colorScheme.offWhite}}>
      <div  style={{backgroundColor:colorScheme.grayBlue,fontFamily:"Tahoma, Geneva, sans-serif",maxWidth:"100vw",paddingTop:this.state.space,paddingLeft:"5%",paddingRight:"5%", paddingBottom:"5em",borderRadius:"0px 0px 0px 5em"}}>

        {console.log(this.props)}
        {this.fixSpace()}

        <div  className="title is-4 is-center" style={{  fontSize: "calc(50px + 2vmin)"}}>
          <div className="columns">


            <div className="column" style={{textAlign:"left",marginTop:"10%"}}>
                <div style={{textAlign:"center",color:colorScheme.lightBlue,minWidth:"100%", fontSize:"1em"}}>
                  <div className="subtitle is-3 is-center" style={{textAlign:"center",color:colorScheme.offWhite}}> - Hi, I'm -</div>
                  <div >Brendan Muldowney</div>
                </div>
            </div>
            <div className="column is-two-fifths" style={{textAlign:"center",color:colorScheme.offWhite,marginTop:"0%"}}>

            <div style={{display: "inline-block"}}>
            <img className="is-rounded"src={headshot} width="100%" alt="Placeholder image" style={{float:"left", paddingTop:"4%"}}/>

            </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <PaneButton
              src = {software}
              label = <div>Software <br/> Developer</div>
              info = <div>
                      Software development is my passion.
                      I have had amazing opporunities to
                      gain experience is different avenues
                      of programming from front end webdesign
                      to machine learning and embedded software.
                     </div>
            />
            </div>
            <div className="column is-one-third">
              <PaneButton
              src = {graduate}
              label = <div>Virginia Tech <br/> Alumnus</div>
              info = <div>
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
                     </div>
            />
            </div>
            <div className="column is-one-third">
              <PaneButton
              src = {location}
              label = <div>Boston,<br/> MA</div>
              info = <div>
              I grew up an hour north of Boston, Massachusetts
              in a town called Newbury. Although I am currently
              a student in Virginia, Boston is definitely my home.
              It is where my friends and family are and where I want
              to be. Despite this, I love to have new experiences and
              explore new places making me open to working anywhere!
                     </div>
            />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default About;
