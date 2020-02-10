import React from 'react';
import './ConnectGrid.css';
import 'bulma/css/bulma.css'
//import * as util from './util/adversary';

class Dropzone extends React.Component{
  constructor(props){
      super(props)
      this.state = {

      }
  }

  placeToken = (rowNumber) => {
      this.props.makeMove(rowNumber)
  }
  render(){
    let grid = [this.state.row0, this.state.row1, this.state.row2, this.state.row3, this.state.row4, this.state.row5]

    return (

      <div class = "columns">
          <div class = "column" onClick = {() => this.placeToken(0)}> Drop </div>
          <div class = "column" onClick = {() => this.placeToken(1)}> Drop </div>
          <div class = "column" onClick = {() => this.placeToken(2)}> Drop </div>
          <div class = "column" onClick = {() => this.placeToken(3)}> Drop </div>
          <div class = "column" onClick = {() => this.placeToken(4)}> Drop </div>
          <div class = "column" onClick = {() => this.placeToken(5)}> Drop </div>
          <div class = "column" onClick = {() => this.placeToken(6)}> Drop </div>
      </div>

      );
  }
}

export default Dropzone;
