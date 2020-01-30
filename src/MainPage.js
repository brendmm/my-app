import React, { Component } from 'react';
import './MainPage.css';
import Navbar from './Components/Navbar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
    <div className="App-header">
    <Navbar/>
    </div>
    );
  }
}

export default Home;
