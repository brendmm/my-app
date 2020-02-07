import React, { Component } from 'react';
import "bulma/css/bulma.css";
import '../MainPage.css';

import Image from 'react-image-resizer';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size:"200",
      padding:"150"
    };
  }

  grow=()=>{
    this.setState({size:"300", padding:"150"});
  }
  shrink=()=>{
    this.setState({size:"200", padding:"150"});
  }

  render() {
    return (
      <div  onMouseOut={() => this.shrink()} onMouseOver={() => this.grow()} style={{padding:this.state.padding}}>
      <img  mode='fit' width={this.state.size} height={this.state.size} src={this.props.image}/>

      </div>
    );
  }
}

export default About;
