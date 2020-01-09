/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { apiKey, remoteUrl, API } from './modules/APImanager';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';

// local style for component
const appStyle = {
  margin: '20% 30% 0% 30%'
}


class AppViews extends Component {
  state = {
    categories : [],
    selected: []
  }
  componentDidMount(){
    API.categories().then(categories => {
      console.log(categories)
      //store them in state
      this.setState({categories: categories})
    })
  }

  // using deconstructing assignment, I'm able to pass in the values of the event
  // weird 
  handleChange  = (event, {value}) => {
    event.preventDefault();
    // grab each event
    console.log("event was triggered and this is the value: ", value)
  }
  
  render(){
    return(
      <>
        <div  style={appStyle}>
          <Dropdown placeholder='Categories' 
          fluid 
          multiple 
          selection 
          options={this.state.categories}
          onChange={this.handleChange}/>
        </div>
      </>
    )
  }
}
export default AppViews;

