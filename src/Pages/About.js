import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './About.css';
// import { Route } from "react-router";
import headshot from '../Images/Headshot.png'
import cpp from '../Images/c++_logo.png'
import python from '../Images/python_logo.png'
import react from '../Images/react_logo.png'

// import family from '../Images/Family.JPG'
import Skill from '../Components/Skill.js'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Image from 'react-image-resizer';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      space: "0%",
      spaceState: 0
    };
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
      this.setState({ space: "20%", spaceState: this.props.space });
    }
    console.log(this.state.space)
  }
}
  render() {
    return (
      <div className = "stripes" style={{backgroundColor:"#F7F8FC",minHeight:"100vh",minWidth:"100vh",paddingTop:this.state.space,paddingLeft:"10%",paddingRight:"10%"}}>
        {console.log(this.props)}
        {this.fixSpace()}

        <div className="title is-2 is-center">
          <div className="columns">
          <div className="column is-one-third">
          </div>
          <div className="column" style={{paddingTop:"10%"}}>
          <div>
            <Image
              style={{rotaione:"90"}}
              src={headshot}
              height={ 300 }
            />
            </div>
            </div>
            <div className="column  is-one-third">
            </div>
            </div>

        </div>

      </div>
    );
  }
}

export default About;

// <div style={{width:"50%"}}>
//       <Carousel
//       centered
// // infinite
// arrows
// slidesPerPage={1}
//       >
//         <Image
//           style={{rotaione:"90"}}
//           src={family}
//           height={ 240 }
//         />
//         <Image
//           style={{rotaione:"90"}}
//           src={imageOne}
//           height={ 240 }
//         />
//       </Carousel>
// </div>

// <div className="column is-three-quarters">
//   <div className="title is-5">
//
//     I'm a software developer. In fact, I have created this
//     website using ReactJs!
//     <br/>
//     <br/>
//     In May of 2020, I will graduate with a B.S. in
//     Computer Engineering from Virginia Tech. Here,
//     I have had amazing opportunities to enhance my
//     software developing skills. I have become proficient
//     in numerpus languages such as C++, Python, and C, as
//     well as techniques in artificial intelligence and machine
//     learning. During my time in school, I have taken courses
//     in data structures, applied software design, control systems,
//     and embedded software design.
//     <br/>
//     <br/>
//     Outside of school, I have been able to gain professional
//     experience through internships. I spent the summers of 2018
//     and 2019 interning for Optum. Here I was able to be involved
//     in an agile working environment creating innovative projects.
//     <br/>
//     <br/>
//
//   </div>
// </div>
