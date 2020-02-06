import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Contact.css';
// import Profile from '../Images/Profile.JPG'
import Phone from '../Images/phone.png'
import Email from '../Images/email.png'

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      space: "0%",
      spaceState: 0
    };
  }

  fixSpace = () => {
  if(this.props.space!=this.state.spaceState){
    if(this.props.space === 1){
      this.setState({ space: "5%", spaceState: this.props.space });
    }
    else if(this.props.space === 2){
      this.setState({ space: "10%", spaceState: this.props.space });
    }
    else if(this.props.space === 3){
      this.setState({ space: "20%", spaceState: this.props.space });
    }
    console.log(this.state.space)
  }
  }

  render() {
    return (

    <div style={{backgroundColor:"#F7F8FC",minHeight:"100vh",paddingTop:this.state.space}}>
      {console.log(this.props)}
      {this.fixSpace()}
      <div className="card column is-6 is-offset-3" style={{backgroundColor:"transparent",bordear:"5px black solid",borderRadius:"25px",marginTop:"15%",boxShadow: "0px 0px 0px"}}>

        <div className = "card column is-10 is-offset-1" style={{backgroundColor:"transparent",paddingTop:"5%",paddingBottom:"5%",boxShadow: "0px 0px 0px",borderRadius:"25px"}}>

                  <div className="title is-3" style={{textAlign:"center"}}>
                  Questions or Feedback?

                  Contact me!

                  </div>
                  <hr style={{border:"1px solid black"}}/>

                  <div className="columns">
                  <div className="column is-half">
                  <span className="icon" style={{float:"left"}}>
                    <img className="is-rounded"src={Phone} alt="Placeholder image"/>
                  </span>
                  <div className="subtitle is-5" >
                    <div className="title is-5" style={{float:"left", marginRight:"2%",  marginLeft:"2%"}}>
                      Phone:
                    </div>
                    978-270-4538
                  </div>
                  </div>
                  <div className="column is-half">
                  <span className="icon" style={{float:"left"}}>
                    <img className="is-rounded"src={Email} alt="Placeholder image"/>
                  </span>
                  <div className="subtitle is-5" >
                  <div className="title is-5" style={{float:"left", marginRight:"2%",  marginLeft:"2%"}}>
                    Email:
                  </div>
                  brendmm@vt.edu
                </div>
                </div>
                </div>

        </div>

      </div>
    </div>

    )
  }
}

export default Resume
// <div className="column is-one-quarter" style={{marginLeft:"5%"}}>
//
//     <figure className="image is-128x128">
//         <img src={Profile} alt="Placeholder image" style={{marginTop:"7%",border: "4px solid black"}}/>
//     </figure>
// </div>
