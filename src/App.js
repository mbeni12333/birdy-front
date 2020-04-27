import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Friends from './components/Friends.js';
import Navigation from './components/navigation.js';
import {API} from './api/birdyapi.js';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './components/login.js';


import './style.css';
import './css/all.css';



const AuthRoute = ({component:Component, ...rest}) => {
  return(
    <Route {...rest} render={(props) => (
      API.checkLoggedIn() === true
      ? <Component {...props}/>
      : <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }} />
    )} />
  );
};

const Mainlayout = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="main_container">
          <Navigation />
          <Main />
          <Friends />
      </div>
    </React.Fragment>
  );
};


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route component={Login} path="/login"/>
            <AuthRoute component={Mainlayout} path = "/"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
