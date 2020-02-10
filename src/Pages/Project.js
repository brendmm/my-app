import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Contact.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Game from "../tictactoe/game.js";
import Modal from 'react-responsive-modal';


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
    <div className="card" style={{width:this.determineWidth(), height:"80vh",borderRadius:"15px", backgroundColor:"#F7F8FC",marginBottom:"5%"}}>
    <header class="card-header" style={{backgroundColor:"#3f4044"}}>
       <p class="card-header-title" style={{color:"#F7F8FC"}}>
         Botler
       </p>
     </header>
     <div class="card-content">
        <div class="content" style={{textAlign:"left"}}>
            Botler was an autonomous system that could receive requested items.
            <br/><br/>
            Topics:
            <ul style={{marginLeft:"5%", fontSize:"15px"}}>
              <li>Embedded Software Design</li>
              <li>Multi-threading</li>
              <li>Network Communication</li>
              <li>Controls</li>
            </ul>
            <br/>
            <button class="button is-large is-link" onClick={() => this.onOpenModal("botler")}>
              More Info
            </button>
        </div>
      </div>
    </div>
  )
}
Game=()=>{
  return(
    <div className="card" style={{width:this.determineWidth(), height:"80vh",borderRadius:"15px", backgroundColor:"#F7F8FC",marginBottom:"5%"}}>
    <header class="card-header" style={{backgroundColor:"#3f4044"}}>
       <p class="card-header-title" style={{color:"#F7F8FC"}}>
         Tic Tac Toe AI
       </p>
     </header>
     <div class="card-content">
        <div class="content" style={{textAlign:"left"}}>
              I created a simple game of Tic Tac Toe to learn
              frontend development in ReactJS. However I also wanted
              someone to play against, so I created an optional AI to
              compete against!
            <br/><br/>
            Topics:
            <ul style={{marginLeft:"5%", fontSize:"15px"}}>
              <li>Frontend Design</li>
              <li>ReactJS</li>
              <li>Artificial Intelligence</li>
            </ul>
            <br/>
            <button class="button is-large is-link" onClick={() => this.onOpenModal("game")}>
              Try It Out
            </button>
        </div>
      </div>
    </div>
  )
}
Pacman=()=>{
  return(
    <div className="card" style={{width:this.determineWidth(), height:"80vh",borderRadius:"15px", backgroundColor:"#F7F8FC",marginBottom:"5%"}}>
    <header class="card-header" style={{backgroundColor:"#3f4044"}}>
       <p class="card-header-title" style={{color:"#F7F8FC"}}>
         Berkley PacMan and MNIST Data
       </p>
     </header>
     <div class="card-content">
        <div class="content" style={{textAlign:"left"}}>
              These project involved using  artificial intelligence
              and machine learning. The Berkley project used artificial
              intelligence arlgorithms to beat Pacman. The MNIST Data project
              involved creating and comparing different types of neural networks
              to categorize the MNIST dataset.
            <br/><br/>
            Topics:
            <ul style={{marginLeft:"5%", fontSize:"15px"}}>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
              <li>Algorithms</li>
            </ul>
            <br/>
        </div>
      </div>
    </div>
  )
}

  render() {
    return (

    <div style={{textAlign:"center",backgroundColor:"#DFE0E4",minHeight:"100vh",paddingTop:this.state.space}}>
      {console.log(this.props)}
      {this.fixSpace()}
      <Carousel
      arrows
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
        showCloseIcon={false}
        focusTrapped={false}

        >

            <Game/>
        </Modal> : null
      }
      {this.state.botlerIsOpen ?
        <Modal open={this.state.botlerIsOpen} onClose={this.onCloseModal} center>
            <div class="container">
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FZ6dC4iSaqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
