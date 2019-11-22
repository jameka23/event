import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Event from "./eventbrite/Event";
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';
import firebaseConfig from './eventbrite/components/modules/firebase'

firebase.initializeApp(firebaseConfig);

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Event />
  </Router>,
  document.getElementById("root")
);