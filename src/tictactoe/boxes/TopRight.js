import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css'
class TopRight extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (
<div class="trsection" onClick = {() => this.props.updateValue('topRight')}>{this.props.value}</div>
          );
    }
}

export default TopRight;