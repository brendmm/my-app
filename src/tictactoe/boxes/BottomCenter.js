import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css'
class BottomCenter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
<div class="bcsection" onClick = {() => this.props.updateValue('bottomCenter')}>{this.props.value}</div>
          );
    }
}

export default BottomCenter;