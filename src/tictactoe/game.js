import React from 'react';
import './game.css';
import TopLeft from './boxes/TopLeft.js'
import TopCenter from './boxes/TopCenter.js'
import TopRight from './boxes/TopRight.js'

import CenterLeft from './boxes/CenterLeft.js'
import CenterCenter from './boxes/CenterCenter.js'
import CenterRight from './boxes/CenterRight.js'

import BottomLeft from './boxes/BottomLeft.js'
import BottomCenter from './boxes/BottomCenter.js'
import BottomRight from './boxes/BottomRight.js'

import 'bulma/css/bulma.css'
import * as util from './util/adversary';

let vsHuman = true;

class Game extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        move: 0,
        topLeftValue: " ",
        topCenterValue: " ",
        topRightValue: " ",
        centerLeftValue: " ",
        centerCenterValue: " ",
        centerRightValue: " ",
        bottomLeftValue: " ",
        bottomCenterValue: " ",
        bottomRightValue: " "
      }
  }
  updateValue = (location) => {

    if(this.state.move === 0){
      //TOPLEFT
      if(location === 'topLeft'){
        if(this.state.topLeftValue === " "){
          this.setState(() => {
            return {topLeftValue: 'O', move: 1};
          });
        }
      }
      //TOPCENTER
      if(location === 'topCenter'){
        if(this.state.topCenterValue === " "){
          this.setState(() => {
            return {topCenterValue: 'O', move: 1};
          });
        }
      }
      //TOPRIGHT
      if(location === 'topRight'){
        if(this.state.topRightValue === " "){
          this.setState(() => {
            return {topRightValue: 'O', move: 1};
          });
        }
      }
      //centerLEFT
      if(location === 'centerLeft'){
        if(this.state.centerLeftValue === " "){
          this.setState(() => {
            return {centerLeftValue: 'O', move: 1};
          });
        }
      }
      //centerCENTER
      if(location === 'centerCenter'){
        if(this.state.centerCenterValue === " "){
          this.setState(() => {
            return {centerCenterValue: 'O', move: 1};
          });
        }
      }
      //centerRIGHT
      if(location === 'centerRight'){
        if(this.state.centerRightValue === " "){
          this.setState(() => {
            return {centerRightValue: 'O', move: 1};
          });
        }
      }
      //bottomLEFT
      if(location === 'bottomLeft'){
        if(this.state.bottomLeftValue === " "){
          this.setState(() => {
            return {bottomLeftValue: 'O', move: 1};
          });
        }
      }
      //bottomCENTER
      if(location === 'bottomCenter'){
        if(this.state.bottomCenterValue === " "){
          this.setState(() => {
            return {bottomCenterValue: 'O', move: 1};
          });
        }
      }
      //bottomRIGHT
      if(location === 'bottomRight'){
        if(this.state.bottomRightValue === " "){
          this.setState(() => {
            return {bottomRightValue: 'O', move: 1};
          });
        }
      }


    }
    else{
      //TOPLEFT
      if(location === 'topLeft'){
        if(this.state.topLeftValue === " "){
          this.setState(() => {
            return {topLeftValue: 'X', move: 0};
          });
        }
      }
      //TOPCENTER
      if(location === 'topCenter'){
        if(this.state.topCenterValue === " "){
          this.setState(() => {
            return {topCenterValue: 'X', move: 0};
          });
        }
      }
      //TOPRIGHT
      if(location === 'topRight'){
        if(this.state.topRightValue === " "){
          this.setState(() => {
            return {topRightValue: 'X', move: 0};
          });
        }
      }
      //centerLEFT
      if(location === 'centerLeft'){
        if(this.state.centerLeftValue === " "){
          this.setState(() => {
            return {centerLeftValue: 'X', move: 0};
          });
        }
      }
      //centerCENTER
      if(location === 'centerCenter'){
        if(this.state.centerCenterValue === " "){
          this.setState(() => {
            return {centerCenterValue: 'X', move: 0};
          });
        }
      }
      //centerRIGHT
      if(location === 'centerRight'){
        if(this.state.centerRightValue === " "){
          this.setState(() => {
            return {centerRightValue: 'X', move: 0};
          });
        }
      }
      //bottomLEFT
      if(location === 'bottomLeft'){
        if(this.state.bottomLeftValue === " "){
          this.setState(() => {
            return {bottomLeftValue: 'X', move: 0};
          });
        }
      }
      //bottomCENTER
      if(location === 'bottomCenter'){
        if(this.state.bottomCenterValue === " "){
          this.setState(() => {
            return {bottomCenterValue: 'X', move: 0};
          });
        }
      }
      //bottomRIGHT
      if(location === 'bottomRight'){
        if(this.state.bottomRightValue === " "){
          this.setState(() => {
            return {bottomRightValue: 'X', move: 0};
          });
        }
      }
    }

  }

  evaluate = () =>{
    if(
      ((this.state.topLeftValue === this.state.topCenterValue) && (this.state.topLeftValue  === this.state.topRightValue) && (this.state.topLeftValue !== " ")) ||
      ((this.state.centerLeftValue === this.state.centerCenterValue) && (this.state.centerLeftValue === this.state.centerRightValue) && (this.state.centerLeftValue !== " ")) ||
      ((this.state.bottomLeftValue === this.state.bottomCenterValue) && (this.state.bottomLeftValue === this.state.bottomRightValue) && (this.state.bottomLeftValue !== " ")) ||
      ((this.state.topLeftValue === this.state.centerLeftValue) && (this.state.topLeftValue  === this.state.bottomLeftValue) && (this.state.topLeftValue !== " ")) ||
      ((this.state.topCenterValue === this.state.centerCenterValue) && (this.state.topCenterValue === this.state.bottomCenterValue) && (this.state.topCenterValue !== " ")) ||
      ((this.state.topRightValue === this.state.centerRightValue) && (this.state.topRightValue  === this.state.bottomRightValue) && (this.state.topRightValue!== " ")) ||
      ((this.state.topLeftValue === this.state.centerCenterValue) && (this.state.topLeftValue  === this.state.bottomRightValue) && (this.state.topLeftValue !== " ")) ||
      ((this.state.topRightValue === this.state.centerCenterValue) && (this.state.topRightValue === this.state.bottomLeftValue) && (this.state.topRightValue !== " "))
    ){
      if(this.state.move == 1){
        return <div>~~~~~O's Win!~~~~~</div>
      }
      else{
        return <div>~~~~~X's Win!~~~~~</div>
      }
    }
    else{
      if(
        (this.state.topLeftValue !== " ") && (this.state.topCenterValue !== " ") && (this.state.topRightValue !== " ") &&
        (this.state.centerLeftValue !== " ") && (this.state.centerCenterValue !== " ") && (this.state.centerRightValue !== " ") &&
        (this.state.bottomLeftValue !== " ") && (this.state.bottomCenterValue !== " ") && (this.state.bottomRightValue !== " ")
      ){
        return <div>~~~~It's a Draw!~~~~</div>

      }
    }
    return <div>~~~~~~~~~~~~~~~~</div>
  }

  resetGame = () => {
    this.setState(() => {
      return {
        move: 0,
        topLeftValue: " ",
        topCenterValue: " ",
        topRightValue: " ",
        centerLeftValue: " ",
        centerCenterValue: " ",
        centerRightValue: " ",
        bottomLeftValue: " ",
        bottomCenterValue: " ",
        bottomRightValue: " "
      };
    });
  }

  cpuMove = () => {
    if(this.state.move===1 && !vsHuman){
      let move = util.myAdversary(this.state, 1)[0]
      if(move === 'tl'){
        this.updateValue('topLeft')
      }
      if(move === 'tc'){
        this.updateValue('topCenter')
      }
      if(move === 'tr'){
        this.updateValue('topRight')
      }
      if(move === 'cl'){
        this.updateValue('centerLeft')
      }
      if(move === 'cc'){
        this.updateValue('centerCenter')
      }
      if(move === 'cr'){
        this.updateValue('centerRight')
      }
      if(move === 'bl'){
        this.updateValue('bottomLeft')
      }
      if(move === 'bc'){
        this.updateValue('bottomCenter')
      }
      if(move === 'br'){
        this.updateValue('bottomRight')
      }
    }
  }

  opponent = () =>{
    vsHuman = !vsHuman;
    this.resetGame();
  }
  render(){

      return (
          <div className="App">
            <div className = "section">
                <div className = "columns" style={{height:"100%"}}>
                    <TopLeft move = {this.state.move} value = {this.state.topLeftValue} updateValue = {(location) => this.updateValue(location)}/>
                    <TopCenter move = {this.state.move} value = {this.state.topCenterValue} updateValue = {(location) => this.updateValue(location)}/>
                    <TopRight move = {this.state.move} value = {this.state.topRightValue} updateValue = {(location) => this.updateValue(location)}/>
                </div>

                <div className = "columns">
                    <CenterLeft move = {this.state.move} value = {this.state.centerLeftValue} updateValue = {(location) => this.updateValue(location)}/>
                    <CenterCenter move = {this.state.move} value = {this.state.centerCenterValue} updateValue = {(location) => this.updateValue(location)}/>
                    <CenterRight move = {this.state.move} value = {this.state.centerRightValue} updateValue = {(location) => this.updateValue(location)}/>
                </div>

                <div className = "columns">
                    <BottomLeft move = {this.state.move} value = {this.state.bottomLeftValue} updateValue = {(location) => this.updateValue(location)}/>
                    <BottomCenter move = {this.state.move} value = {this.state.bottomCenterValue} updateValue = {(location) => this.updateValue(location)}/>
                    <BottomRight move = {this.state.move} value = {this.state.bottomRightValue} updateValue = {(location) => this.updateValue(location)}/>
                </div>
                <div className = "status"> {this.evaluate()} </div>

                <div class="resetButton" onClick = {() => this.resetGame()} >Reset</div>

             </div>
             <div>
               <div>
                <label class="switch">
                  <input type="checkbox"/>
                    <span class="slider" onClick = {() => this.opponent()}></span>
                </label>
              </div>

             </div>
            {this.cpuMove()}
          </div>
        );
  }
}

export default Game;
