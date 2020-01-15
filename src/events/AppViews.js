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
    theEvents: [],
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
    console.log(event)
    console.log(value)
    this.setState({selected: value})
  }
  
  //event to handle adding item in dropdown to user's current selected categories
  // NOT SURE IF THIS WORKS BUT WILL REFACTOR 
  handleAddItem =(event) => {
    const newCat = {
      key:event.target.value,
      text: event.target.value,
      value: event.target.value
    }
    this.setState({selected: [...this.state.choices, newCat]});
  }


  // event handler for submit
  handleSubmit = (event) => {
    console.log("this is the value",event.target)
    console.log("submit and this is selected array:", this.state.selected)    

    // create variable to hold the length of the selected
    let choiceLen = 0;
    choiceLen = this.state.selected.length;
    console.log("this is the number of items in the selected array:", choiceLen)


    //the function to make the fetch call to get the events
    const getEvents = async(_oArgs) => {
      let _this = this;
      await window.EVDB.API.call('/events/search', _oArgs, function(oData) {
        //after the call make a call to the function to grab the returned events
        if(oData.events){
          receiveEvents(oData.events.event)
        }else{
          console.log("Error occured making fetch call! Try again loser!")
        }

      })
    }

    const receiveEvents = (returnedEvents) => {
      // let allEvents = this.state.theEvents.push(returnedEvents)

      // using the spread operator to take both whats in the current state which shouldn't contain anything AND the newly added events. 
      this.setState({theEvents: [...this.state.theEvents, returnedEvents]});
      console.log(this.state.theEvents)
      
    }

    if(choiceLen > 3){
      alert("Please choose 3 or less categories!")
    }else{
      
      for(let i =0; i< choiceLen; i++){
        // handle the calls to the eventful api
        var _oArgs = {
          app_key: apiKey,
          category: this.state.selected[i],
          q: this.state.selected[i],
          location: `${this.state.userLocation.lat}, ${this.state.userLocation.long}`,
          // page_size: 10,
          date: 'Future',
          within: 20,
          //page_number:5
        }

        getEvents(_oArgs)
      }
    }
  }


  render(){
    return(
      <>
        <div  style={appStyle}>
          <Form onSubmit={this.handleSubmit}>
            <FormField>
              <Dropdown 
              onAddItem={this.handleAddItem} 
              onChange={this.handleChange} 
              placeholder='Categories' 
              fluid multiple selection 
              options={this.state.categories} />
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

