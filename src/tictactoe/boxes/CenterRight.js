import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css'
class CenterRight extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
<div class="crsection" onClick = {() => this.props.updateValue('centerRight')}>{this.props.value}</div>
          );
    }
}

export default CenterRight;