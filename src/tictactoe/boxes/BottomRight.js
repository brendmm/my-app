import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css'
class BottomRight extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
<div class="brsection" onClick = {() => this.props.updateValue('bottomRight')}>{this.props.value}</div>
          );
    }
}

export default BottomRight;