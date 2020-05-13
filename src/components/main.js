import React from 'react';
import Profile from './profile.js';

import {Route, Link, Switch, Redirect} from 'react-router-dom';
import {API} from '../api/birdyapi.js';
import Chat from './Chat.js';



const Logout = () => {
  return(
    <button className="btn btn--white" onClick={() => {
      API.logout(() => {
        //alert("redirecting ....");
        //return <Redirect to="/login" />;
        window.location.href = '/login'
      });
    }} style={{
      position:"absolute",
      top: "50%",
      left:"50%",
      transform:"translate(-50%, -50%)"
    }}>Logout</button>
  )
}


const Main = () => {
  return(
    <main>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route path="/chat" component={Chat} />
        <Route exact path="/" component={Logout}/>
      </Switch>
    </main>
  )
}

export default Main;
