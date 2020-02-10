import React from 'react';
import './css/button.css';
import 'bulma/css/bulma.css'
class TopLeft extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return (

        <div class="tlsection" onClick = {() => this.props.updateValue('topLeft')}>{this.props.value}</div>

          );
    }
}

export default TopLeft;