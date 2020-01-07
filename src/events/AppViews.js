/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { apiKey, remoteUrl, API } from './modules/APImanager';
import { Dropdown } from 'semantic-ui-react';

class AppViews extends Component {
  state = {
    categories : []
  }
  
  componentDidMount(){

    const xhr = new XMLHttpRequest();
    var json_obj, status = false;

    xhr.open("GET", `api.eventful.com/json/categories/list?...app_key${apiKey}`, true)
    xhr.onload = function(e) {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          const respType = xhr.response;
          console.log(respType)
          json_obj = JSON.parse(xhr.responseXML);
          status = true;
          console.log(json_obj)
          this.setState({json_obj})
        }else{
          console.error(xhr.statusText)
        }
      }
    }.bind(this);
    xhr.onerror = function(e) {
      console.error(xhr.statusText)
    };
    xhr.send(null);
  }

  options = [
    {key: 'me', text: 'Jameka', value: 'Jameka'}
  ]
  
  render(){
    return(
      <>
        <Dropdown placeholder='Categories' fluid multiple selection options={this.options}/>
      </>
    )
  }
}
export default AppViews;