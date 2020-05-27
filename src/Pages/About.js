import React, { Component } from 'react';

import "bulma/css/bulma.css";
import {colorScheme, buttonStyle} from "../design.js"

import headshot from '../Images/Headshot.png'
import software from '../Images/software.png'
import graduate from '../Images/graduate.png'
import location from '../Images/location.png'
import PaneButton from '../Components/PaneButton'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

import Image from 'react-image-resizer';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{backgroundColor:colorScheme.offWhite}}>
        <div  style={{backgroundColor:colorScheme.grayBlue,fontFamily:"Tahoma, Geneva, sans-serif",maxWidth:"100vw",paddingTop:"10vh",paddingLeft:"5%",paddingRight:"5%", paddingBottom:"5%",borderRadius:"0px 0px 0px 5em"}}>

          <div  className="title is-4 is-center" style={{  fontSize: "calc(50px + 2vmin)"}}>
            <div className="columns">

              <div className="column" style={{textAlign:"left",marginTop:"8%"}}>
                  <div style={{textAlign:"center",color:colorScheme.lightBlue,minWidth:"100%", fontSize:"1em"}}>
                    <div className="subtitle is-3 is-center" style={{textAlign:"center",color:colorScheme.offWhite}}> - Hi, I'm -</div>
                    <div >Brendan Muldowney</div>
                  </div>
              </div>
              <div className="column is-4" style={{textAlign:"center",color:colorScheme.offWhite,marginTop:"0%"}}>

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
                        I love to develop software.
                        I have had amazing opporunities to
                        gain experience in different avenues
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
                I graduated with a degree in Computer Engineering from Virginia Tech in May of 2020 with Magna Cum Laude honors.
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
