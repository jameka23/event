/* eslint-disable no-unused-vars */
/* eslint react/prop-types: 0 */
import React, { Component } from "react";
import { withRouter } from "react-router";


export default class Home extends Component {
  state = {
    firstName: "",
    categoryValues: [],
    activeUser: Number(sessionStorage.getItem("userId"))
  }
  

  
  componentDidMount() {
    // find the user and store the first name
    let user = this.props.users.find(u => {
      console.log(u)
      return u.userId === this.state.activeUser
    })
    console.log(user)
    if(user !== undefined){
      this.setState({firstName: user.first});
    }


  }

  // handle the multiple change 
  handleMultipleChange = event => {
    console.log(event.target)
    let options = event.target.options
    const value = [];
    
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    this.setState({categoryValues: value})
  }
  

  render() {
    // console.log(this.state.categories)
    
    return(
        <></>
    )
  }
}
withRouter(Home);