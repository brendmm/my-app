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
toggleModal = () =>{

}
Botler=()=>{
  return(
    <div className="card" style={{width:"40vw", height:"80vh",borderRadius:"15px", backgroundColor:"#F7F8FC",marginBottom:"5%"}}>
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
            <button class="button is-large is-link" onClick={() => this.onOpenModal("botler")}>More Info</button>

            <Modal open={this.state.botlerIsOpen} onClose={this.onCloseModal} center>
                <div class="container">
                some description
                  <div class="columns">
                    <div class="column">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FZ6dC4iSaqo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
            </Modal>


        </div>
      </div>
    </div>
  )
}
Game=()=>{
  return(
    <div className="card" style={{width:"40vw", height:"80vh",borderRadius:"15px", backgroundColor:"#F7F8FC",marginBottom:"5%"}}>
    <header class="card-header" style={{backgroundColor:"#3f4044"}}>
       <p class="card-header-title" style={{color:"#F7F8FC"}}>
         Tic Tac Toe AI
       </p>
     </header>
     <div class="card-content">
        <div class="content">
        <button class="button is-large is-link" onClick={() => this.onOpenModal("game")}>Try It Out</button>

        <Modal
        open={this.state.gameIsOpen}
        onClose={this.onCloseModal}
        style={{width:"80vw"}}
        center
        showCloseIcon={false}
        focusTrapped={false}

        >

            <Game/>
        </Modal>


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
      slidesPerPage={2}
      centered
      >
      {this.Botler()}
      {this.Game()}
      </Carousel>
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
