// React base
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
// Destructured import, as we are not exporting
// the "default" as done prior, so must de-structure
// and declare what we are exporting
import reportWebVitals from './reportWebVitals';

// React render the DOM Tree
ReactDOM.render(
  <React.StrictMode>
  <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
