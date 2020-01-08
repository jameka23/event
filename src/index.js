import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import AppViews from "./events/AppViews";
import 'semantic-ui-css/semantic.min.css';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <AppViews />
  </Router>,
  document.getElementById("root")
);