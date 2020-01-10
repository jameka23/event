/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { apiKey, remoteUrl, API } from './modules/APImanager';
import axios from 'axios';
import { Dropdown } from 'semantic-ui-react';
import { Form, FormField, Button } from 'semantic-ui-react';

// local style for component
const appStyle = {
  margin: '20% 30% 0% 30%'
}

const spanStyle = {
  marginTop: '2%'
}

class AppViews extends Component {
  state = {
    categories : [],
    selected: [],
    isSubmitted: false,
    userLocation: {lat: 32, long: 32} // default value is Nashville 
  }
  componentDidMount(){
    API.categories().then(categories => {
      console.log(categories)
      //store them in state
      this.setState({categories: categories})
    })

    // grab coordinates from the Web browser's geolocation
    navigator.geolocation.getCurrentPosition(position => {
      let coordinates = position.coords
      let lat = coordinates.latitude
      let lng = coordinates.longitude

      //set the state for location
      this.setState({userLocation: {lat: lat, long: lng}})
    })
  }

  // using deconstructing assignment, I'm able to pass in the values of the event
  // weird 
  handleChange  = (event, {value}) => {
    console.log(typeof(value))
    let choices = value;

    this.setState({selected: choices})
    // grab each event
    console.log("event was triggered and this is the value: ",value, this.state.selected)
  }
  
  // event handler for submit
  handleSubmit = (event) => {
    console.log("this is the value",event.target)
    

    // handle the calls to the eventful api
    var _oArgs = {
      app_key: apiKey,
      category: this.state.categories[1],
      
    }
  }


  render(){
    return(
      <>
        <div  style={appStyle}>
          <Form onSubmit={this.handleSubmit}>
            <FormField>
              <Dropdown id={this.state.selected} placeholder='Categories' fluid multiple selection options={this.state.categories} onChange={this.handleChange}/>
              <span>Choose up to 3 categories.</span>
            </FormField>
            <Button>Submit</Button>
          </Form>
          
        </div>
      </>
    )
  }
}
export default AppViews;

