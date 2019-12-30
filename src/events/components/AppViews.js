/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./home/Home";
import Login from "./authentication/Login";
import EventbriteAPI from "./modules/eventbriteManager";
import Register from "./authentication/Register";
import firebase from "./modules/firebase"


export const AuthContext = React.createContext({});

const AppViews = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);
  

  // componentDidMount(){
  //   // get a reference to the firebase database
  //   const db = firebase.database().ref().child('users');
    

  //   db.on('value', snapshot => {
  //     //console.log(snapshot.val())
  //     this.setState({
  //       // snapshot.val is an obj that has key/value pairs that are obj that we want
  //       users: Object.values(snapshot.val())
  //     }) 
      
  //   })
  //   this.getCategories()

  // }

  //check authentication
  //isAuthenticated = () => sessionStorage.getItem("credentials") !== null;


  // make a call to get the categories of the events for user's to choose from 
  // will need to change becauce eventbrite deprecated their event search api :(
  const getCategories = () =>{
    EventbriteAPI.categories()
    .then(catObj =>{
      //console.log(catObj)
      this.setState({categories: catObj.categories})
      //console.log(this.state.categories)
      
    })
  }


  // This component will handle a bunch of the routing to the other components

    console.log(this.state.users)
    return (
      <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
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
      </AuthContext.Provider>
    );

}

withRouter(AppViews);
