import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css'
class TopCenter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
<div class="tcsection" onClick = {() => this.props.updateValue('topCenter')}>{this.props.value}</div>
          );
    }
}

export default TopCenter;