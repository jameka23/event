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


class AppViews extends Component {
  state = {
    categories : [],
    selected: [],
    isSubmitted: false,
    userLocation: {lat: 32, long: 32}
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
      this.setState({})
    })
  }

  // using deconstructing assignment, I'm able to pass in the values of the event
  // weird 
  handleChange  = (event, {value}) => {
    event.preventDefault();
    // grab each event
    console.log("event was triggered and this is the value: ", value)
  }
  
  // event handler for submit
  handleSubmit = (event) => {
    // turn the submit flag to true and 
    this.setState({isSubmitted: true});

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
          <Form>
            <FormField>
              <Dropdown placeholder='Categories' fluid multiple selection options={this.state.categories} onChange={this.handleChange}/>
            </FormField>
            <Button onSubmit={this.handleSubmit}>Submit</Button>
          </Form>
          
        </div>
      </>
    )
  }
}
export default AppViews;

