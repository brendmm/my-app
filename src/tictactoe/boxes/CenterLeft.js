import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css'
class CenterLeft extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
<div class="clsection" onClick = {() => this.props.updateValue('centerLeft')}>{this.props.value}</div>
          );
    }
}

export default CenterLeft;