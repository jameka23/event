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
    categories : []
  }
  componentDidMount(){
    API.categories().then(categories => {
      console.log(categories)
      //store them in state
      this.setState({categories: categories})
    })
  }

  options = [
    {key: 'me', text: 'Jameka', value: 'Jameka'}
  ]
  
  render(){
    return(
      <>
        <div  style={appStyle}>
          <Dropdown placeholder='Categories' fluid multiple selection options={this.state.categories}/>
        </div>
      </>
    )
  }
}
export default AppViews;

