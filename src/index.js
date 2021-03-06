// React base
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux"; // For Redux
import { createStore, applyMiddleware, combineReducers } from 'redux'; // For Redux
import { searchRobots, requestRobots } from "./reducers"; // For Redux
import { createLogger } from 'redux-logger'; // Redux Logging
import thunkMiddleware from 'redux-thunk';
import "tachyons";
// Destructured import, as we are not exporting
// the "default" as done prior, so must de-structure
// and declare what we are exporting
import reportWebVitals from "./reportWebVitals";

const logger = createLogger(); // Redux logging
const rootReducer = combineReducers({searchRobots,requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); // For Redux

// React render the DOM Tree
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
