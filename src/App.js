import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Friends from './components/Friends.js';
import Navigation from './components/navigation.js';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Login from './components/login.js';

import './style.css';
import './css/all.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Header />
              <div className="main_container">
                  <Navigation />
                  <Main />
                  <Friends />
              </div>
            </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
