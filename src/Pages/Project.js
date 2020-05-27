import React, { Component } from 'react';
import "bulma/css/bulma.css";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Game from "../tictactoe/game.js";
import Modal from 'react-responsive-modal';
import {colorScheme, buttonStyle} from "../design.js"
import left from '../Images/leftIcon.png'
import right from '../Images/rightIcon.png'
import Image from 'react-image-resizer';

const projects = [
  {
    title: "Botler",
    description: "Botler was an autonomous system that could retrieve requested items.",
    topics: [
      "Embedded Software Design",
      "Multi-threading",
      "Network Communication",
      "Controls"
    ],
    hasModal: true,
    hasGithub: false,
    hasLink: false,
    modalTitle:"More Info",
    linkDesc: null,
    link: null,
    githubLink: null,
    modalInfo: <div class="container" style={{marginTop:"3%"}}>
        The objective was for the rover to retrieve  requested object.
        By showing a handwritten word to a camera, They system would
        begin by running an optical character recognition software to
        determine what the desired item was. The rover would then
        navigate its way to the robotic arm using a combination of
        pixycam and ultrasonic distance sensor data. Once the rover
        arrives, the arm would then determine whic item it is supposed
        to grab, pick it up, and place it on the rover. The rover would
        then navigate back to the start position, brining the requested item.
        <br/>
        <br/>
        Here is a video presentation of the project, including an in-depth
        explanation and demonstration of the system.
        <br/>
        <br/>
          <div class="columns">
            <div class="column">
            {1 ?
            <iframe style={{marginLeft:"12%"}} width="560" height="315" src="https://www.youtube.com/embed/FZ6dC4iSaqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              :
              <a className="button is-link" href="https://www.youtube.com/watch?v=FZ6dC4iSaqo" target="_blank">
                Go To Video
              </a>
            }
            </div>
          </div>
              </div>
  },
  {
    title: "MNIST Data Neural Networks",
    description: `This is a machine learning project where
    different implementations of neural networks were built
    and compared in categorizing the MNIST Dataset.`,
    topics: [
      "Frontend Design",
      "ReactJS",
      "Artificial Intelligence"
    ],
    hasModal: false,
    modalTitle: null,
    modalInfo: null,
    hasGithub: true,
    hasLink: true,
    linkDesc: "Mnist Data",
    link: "http://yann.lecun.com/exdb/mnist/",
    githubLink: "https://github.com/brendmm/Mnist-Dataset-NN",

  },
  {
    title: "Tic Tac Toe",
    description: `I created a simple game of Tic Tac Toe to learn
    frontend development in ReactJS. However I also wanted
    someone to play against, so I created an optional AI to
    compete against!`,
    topics: [
      "Machine Learning",
      "Neural Netowrks",
      "Image Recognition"
    ],
    hasGithub: false,
    hasLink: false,
    linkDesc: null,
    link: null,
    githubLink: null,
    hasModal: true,
    modalTitle:"Try it out",
    modalInfo: <Game/>
  },
  {
    title: "Plotscript",
    description: `Plotscript is a lisp scripting language. This project demonstrates
    the tools of object oriented programming. It is also a great example of
    GUI implementation, unit testing, multithreading, and more`,
    topics: [
      "Object Oriented Programming",
      "GUI Design",
      "Unit Testing"
    ],
    hasGithub: true,
    hasLink: false,
    linkDesc: null,
    link: null,
    githubLink: "https://github.com/brendmm/Plotscript",
    hasModal: false,
    modalTitle:null,
    modalInfo: null
  }
]

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spaceState: 0,
      modalState: false,
      modalVal : null
    };
  }
  onOpenModal = (state, val) => {
      this.setState({modalState: true, modalVal: val });
  };

  onCloseModal = () => {
    this.setState({ modalState: false});
  };

  fixSpace = () => {
  if(this.props.space!=this.state.spaceState){
    if(this.props.space === 1){
      this.setState({spaceState: this.props.space });
    }
    else if(this.props.space === 2){
      this.setState({spaceState: this.props.space });
    }
    else if(this.props.space === 3){
      this.setState({spaceState: this.props.space });
    }
  }
  }

  determineSlides = () => {
    if(this.state.spaceState === 1){
      return 2
    }
    else{
      return 1
    }
  }

  determineWidth = () => {
    if(this.state.spaceState === 1){
      return "40vw"
    }
    else{
      return "80vw"
    }
  }

  createPage=(item,index)=>{
    return(
      <div className="card" style={{width:this.determineWidth(),backgroundColor:colorScheme.offWhite, minHeight:"80vh",borderRadius:"15px"}}>
      <div class="card-div" style={{backgroundColor:colorScheme.lightBlue}}>
         <div class="card-div-title" style={{color:"#000000",fontSize:"1.2em"}}>
           {item.title}
         </div>
       </div>
       <div class="card-content" style={{textAlign:"left",backgroundColor:colorScheme.offWhite}}>
          <div class="content">
              {item.description}

              {item.hasLink ?
                <div>
                  <a className="button" href={item.link} target="_blank" style={{border: "0px solid "+colorScheme.offWhite, color: colorScheme.grayBlue, backgroundColor: colorScheme.offWhite}}>
                    More Information on {item.linkDesc}
                  </a>
                </div>: <br/>

            }

              Topics:
              <ul style={{marginLeft:"5%", fontSize:"0.75em"}}>
                {item.topics.map((name, index) => (
                  <li key={index}>
                    {name}
                  </li>
                ))}
              </ul>
              <br/>
              {item.hasModal ?
              <button class="button is-large is-link " onClick={() => this.onOpenModal(item.title, item.modalInfo)} style={buttonStyle}>
                {item.modalTitle}
              </button>  : null
            }
            {item.hasGithub ?
              <a className="button is-large is-link " href={item.githubLink} target="_blank" style={buttonStyle}>
                    View Github Repo
              </a>  : null
          }
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div style={{backgroundColor:colorScheme.offWhite}}>
          <div style={{textAlign:"center",backgroundColor:colorScheme.grayBlue,minHeight:"100vh",paddingTop:"10vh",paddingBottom: "10vh",  borderRadius:"5em 0px 0px 5em"}}>
            {this.fixSpace()}
            <Carousel
              arrowLeft={<img name="arrow-left" src={left} />}
              arrowRight={<img name="arrow-right" src={right} />}
              addArrowClickHandler
              infinite
              clickToChange
              animationSpeed={2000}
              autoPlay={7000}
              stopAutoPlayOnHover
              dots
              slidesPerPage={this.determineSlides()}
              centered
            >
              {projects.map(this.createPage)}
            </Carousel>
            {this.state.modalState ?
              <Modal open={this.state.modalState} onClose={this.onCloseModal} center>
                {this.state.modalVal}
              </Modal> : null
            }
          </div>
      </div>
    )
  }
}

export default Project
