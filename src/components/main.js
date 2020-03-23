import React from 'react';
import Profile from './profile.js';

import {Route, Link, Switch} from 'react-router-dom';
import Chat from './Chat.js';


const Main = () => {
  return(
    <main>
      <Switch>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </main>
  )
}

export default Main;
