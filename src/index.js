import React from 'react';
import ReactDOM from 'react-dom';
import {API, SetAuthorizationToken} from './api/birdyapi.js';

import App from './App';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';


const token = localStorage.getItem("token");

if(token !== null){
  console.log("User is still logged in ");
  SetAuthorizationToken(token);
}

ReactDOM.render(<App />, document.getElementById('root'));
//document.getElementById('root').requestFullscreen();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
