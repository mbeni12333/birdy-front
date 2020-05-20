import React from 'react';
import ReactDOM from 'react-dom';
import {API, SetAuthorizationToken} from './api/birdyapi.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux'


import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';

/*Initialise state*/
const token = localStorage.getItem("token");

if(token !== null){
  console.log("User is still logged in ");
  SetAuthorizationToken(token);
}

const dum = (state, action) => {
  return state
}

const store = createStore(dum)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
//document.getElementById('root').requestFullscreen();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
