import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Contact.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Game from "../tictactoe/game.js";
import Modal from 'react-responsive-modal';
import colorScheme from "../design.js"
import left from '../Images/leftIcon.png'
import right from '../Images/rightIcon.png'
import Image from 'react-image-resizer';


class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      space: "0%",
      spaceState: 0,
      botlerIsOpen: false,
      gameIsOpen: false
    };
  }
  onOpenModal = (val) => {
    console.log(val)
    if(val==="botler"){
      this.setState({botlerIsOpen: true });
    }
    else if(val==="game"){
          this.setState({gameIsOpen: true });
        }
  };

  onCloseModal = () => {
    this.setState({ botlerIsOpen: false,
                    gameIsOpen: false });
  };

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
Botler=()=>{
  return(
    <div className="card" style={{width:this.determineWidth(),backgroundColor:colorScheme.offWhite, height:"80vh",borderRadius:"15px"}}>
    <div class="card-div" style={{backgroundColor:colorScheme.lightBlue}}>
       <div class="card-div-title" style={{color:"#000000",fontSize:"1.2em"}}>
         Botler
       </div>
     </div>
     <div class="card-content" style={{textAlign:"left",backgroundColor:colorScheme.offWhite}}>
        <div class="content">
            Botler was an autonomous system that could receive requested items.
            <br/><br/>
            Topics:
            <ul style={{marginLeft:"5%", fontSize:"0.75em"}}>
              <li>Embedded Software Design</li>
              <li>Multi-threading</li>
              <li>Network Communication</li>
              <li>Controls</li>
            </ul>
            <br/>
            <button class="button is-large is-link " onClick={() => this.onOpenModal("botler")} style={{ border:"2px solid "+colorScheme.orange, backgroundColor:"transparent", color:"black"}}>
              More Info
            </button>
        </div>
      </div>
    </div>
  )
}
Game=()=>{
  return(
    <div className="card" style={{width:this.determineWidth(),backgroundColor:colorScheme.offWhite, height:"80vh",borderRadius:"15px"}}>
    <div class="card-div" style={{backgroundColor:colorScheme.lightBlue}}>
       <div class="card-div-title" style={{color:"#000000",fontSize:"1.2em"}}>
       Tic Tac Toe
       </div>
     </div>
     <div class="card-content">
        <div class="content" style={{textAlign:"left"}}>
              I created a simple game of Tic Tac Toe to learn
              frontend development in ReactJS. However I also wanted
              someone to play against, so I created an optional AI to
              compete against!
            <br/><br/>
            Topics:
            <ul style={{marginLeft:"5%", fontSize:"0.75em"}}>
              <li>Frontend Design</li>
              <li>ReactJS</li>
              <li>Artificial Intelligence</li>
            </ul>
            <br/>
            <button class="button is-large is-link " onClick={() => this.onOpenModal("game")} style={{ border:"2px solid "+colorScheme.orange, backgroundColor:"transparent", color:"black"}}>
              Try It Out
            </button>
        </div>
      </div>
    </div>
  )
}
Pacman=()=>{
  return(
    <div className="card" style={{width:this.determineWidth(),backgroundColor:colorScheme.offWhite, height:"80vh",borderRadius:"15px"}}>
    <div class="card-div" style={{backgroundColor:colorScheme.lightBlue}}>
       <div class="card-div-title" style={{color:"#000000",fontSize:"1.2em"}}>
         Berkley PacMan and MNIST Data
       </div>
     </div>
     <div class="card-contenta" style={{marginLeft:"5%"}}>
     <br/>
        <div class="contenta" style={{textAlign:"left"}}>
              Berkley AI:
            <ul style={{marginLeft:"5%", fontSize:"0.75em"}}>
              <li>Created solutions to Pac Man using artificial intelligence</li>
              <li>Practice different algorithms and designs to receive increasingly better results</li>
            </ul>
        </div>
        <br/>
        <div class="contenta" style={{textAlign:"left"}}>
              MNIST Data:
            <ul style={{marginLeft:"5%", fontSize:"0.75em"}}>
              <li>Used Nueral Networks to categorize handwritten numbers</li>
              <li>Compared different network designs and compared resules</li>
            </ul>
            <br/>
        </div>
      </div>
    </div>
  )
}

  render() {
    return (
<div style={{backgroundColor:colorScheme.offWhite}}>
    <div style={{textAlign:"center",backgroundColor:colorScheme.grayBlue,minHeight:"100vh",paddingTop:this.state.space,paddingBottom: "5em",  borderRadius:"5em 0px 0px 5em"}}>
      {console.log(this.props)}
      {this.fixSpace()}

      <Carousel
        arrowLeft={<img name="arrow-left" src={left} />}
        arrowRight={<img name="arrow-right" src={right} />}
        addArrowClickHandler
        infinite
        clickToChange
        animationSpeed={1500}
        autoPlay={3000}
        stopAutoPlayOnHover
        dots
        slidesPerPage={this.determineSlides()}
        centered
      >
      {this.Botler()}
      {this.Game()}
      {this.Pacman()}
      </Carousel>
      {this.state.gameIsOpen ?
        <Modal
        open={this.state.gameIsOpen}
        onClose={this.onCloseModal}
        style={{width:"80vw"}}
        center
        showCloseIcon={true}
        focusTrapped={false}

        >

            <Game/>
        </Modal> : null
      }
      {this.state.botlerIsOpen ?
        <Modal open={this.state.botlerIsOpen} onClose={this.onCloseModal} center>
            <div class="container" style={{marginTop:"3%"}}>
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
                {this.state.spaceState<3 ?
                <iframe style={{marginLeft:"12%"}} width="560" height="315" src="https://www.youtube.com/embed/FZ6dC4iSaqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  :
                  <a className="button is-link" href="https://www.youtube.com/watch?v=FZ6dC4iSaqo" target="_blank">
                    Go To Video
                  </a>
                }
                </div>
              </div>
            </div>
        </Modal> : null
      }
    </div>
</div>
    )
  }
}

export default Resume
// <div className="column is-one-quarter" style={{marginLeft:"5%"}}>
//
//     <figure className="image is-128x128">
//         <img src={Profile} alt="Placeholder image" style={{marginTop:"7%",border: "4px solid black"}}/>
//     </figure>
// </div>
