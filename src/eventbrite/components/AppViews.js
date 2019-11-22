/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./home/Home";
import Login from "./authentication/Login";
import API from './modules/APImanager';
import EventbriteAPI from "./modules/eventbriteManager";
import Register from "./authentication/Register";

export default class AppViews extends Component {
  state = {
    users : [],
    categories: [],
    activeUser : Number(sessionStorage.getItem("userId"))
  };
  

  componentDidMount(){
    // get all state properties 
    API.all().then(resp => this.setState({users: resp}))
    .then(() => {
      this.getCategories()
    })
  }

  //check authentication
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;


  // make a call to get the categories of the events for user's to choose from 
  getCategories = () =>{
    EventbriteAPI.categories()
    .then(catObj =>{
      console.log(catObj)
      this.setState({categories: catObj.categories})
      console.log(this.state.categories)
      
    })
  }


  // This component will handle a bunch of the routing to the other components
  render() {
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
