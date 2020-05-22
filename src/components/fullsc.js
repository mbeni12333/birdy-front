import React from 'react'
import ReactDOM from 'react-dom';

import {
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const Fullsc = ({Component, ...rest}) => {

  //const background = props.src || null;

  return(
    <Route {...rest} render={(props) => (
      <div className="fullsc-conatiner" id="fullsc-conatiner">
        <button className="btn-circle btn-circle--large fullsc-close" onClick={(e) => {

        }}>
          <i className="fas fa-times"></i>
        </button>

        {Component}

      </div>
    )} />
  )
}


export default Fullsc;
