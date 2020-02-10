import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css'
class CenterCenter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
<div class="ccsection" onClick = {() => this.props.updateValue('centerCenter')}>{this.props.value}</div>
          );
    }
}

export default CenterCenter;