/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./home/Home";
import Login from "./authentication/Login";
import EventbriteAPI from "./modules/eventbriteManager";
import Register from "./authentication/Register";
import * as firebase from "firebase";

export default class AppViews extends Component {
  state = {
    users : [],
    categories: [],
    activeUser : Number(sessionStorage.getItem("userId"))
  };
  

  componentDidMount(){
    // get a reference to the firebase database
    const db = firebase.database().ref().child('users');
    

    db.on('value', snapshot => {
      //console.log(snapshot.val())
      this.setState({
        // snapshot.val is an obj that has key/value pairs that are obj that we want
        users: Object.values(snapshot.val())
      }) 
      
    })
    this.getCategories()

  }

  //check authentication
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;


  // make a call to get the categories of the events for user's to choose from 
  getCategories = () =>{
    EventbriteAPI.categories()
    .then(catObj =>{
      //console.log(catObj)
      this.setState({categories: catObj.categories})
      //console.log(this.state.categories)
      
    })
  }


  // This component will handle a bunch of the routing to the other components
  render() {
    console.log(this.state.users)
    return (
      <>
        <Route exact path="/home" render={ (props) => {
            return <Home 
                {...props} 
                categories = {this.state.categories}
                users = {this.state.users}
                activeUser = {this.state.activeUser}
            />;
          }} />
        <Route exact path="/" render={(props) => {
            return <Login 
                {...props} 
                users = {this.state.users}
                activeUser = {this.state.activeUser}
              />
        }} />
        <Route exact path="/register" render={(props) =>{
          return <Register {...props}/>
        }} />
      </>
    );
  }
}

withRouter(AppViews);