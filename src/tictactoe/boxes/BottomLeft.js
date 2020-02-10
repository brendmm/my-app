import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css';
class BottomLeft extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
            <div class="blsection" onClick = {() => this.props.updateValue('bottomLeft')}>{this.props.value}</div>
          );
    }
}

export default BottomLeft;