import React from 'react';

import Field from './field.js';
import {Route, Switch, Link} from 'react-router-dom';


import LoginForm from '../forms/loginForm.js';
import SignUpForm from '../forms/signupForm.js';

const Login = () => {

  return (
    <div className="login">
      <div className="login__header">

      </div>
      <div className="login__content">
        <section className="login__content-panel login__content-panel--1">
          <div className="logobox">
            <i className="fas fa-rocket"></i>
            <h3>Birdy-app</h3>
          </div>
          <div className="login__content-panel-card login__content-panel-card--1">
            <div className="presentation">
              <h1 className="presentation__title">
                Birdy
              </h1>
              <p className="presentation__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <ul className="presentation__features">
                <li className="presentation__features-feature-box">
                    <i className="presentation__features-feature-box__icon fas fa-rocket"></i>
                    <h3 className="heading-tertiary">Straight Forwad social network</h3>
                    <p className="presentation__features-feature-box__text">
                      Lorem ipsum dolor
                    </p>
                </li>
                <li className="presentation__features-feature-box">
                    <i className="presentation__features-feature-box__icon fas fa-comment"></i>
                    <h3 className="heading-tertiary">Real time groupchat</h3>
                    <p className="presentation__features-feature-box__text">
                      Lorem ipsum dolor
                    </p>
                </li>
                <li className="presentation__features-feature-box">
                    <i className="presentation__features-feature-box__icon fas fa-chalkboard-teacher"></i>
                    <h3 className="heading-tertiary">Real time WhiteBoard</h3>
                    <p className="presentation__features-feature-box__text">
                      Lorem ipsum dolor
                    </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="login__content-panel login__content-panel--2">
            <div className="login__content-panel-card">
              <Switch>
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/login/signup" component={SignUpForm}/>
              </Switch>
            </div>
        </section>
      </div>

      <div className="login__footer">
          <ul className="login__footer-links">
            <li>Linkedin</li>
            <li>Terms</li>
            <li>Api</li>
            <li>Twitter</li>
            <li>Contact</li>
          </ul>
          <span className="login__footer-love">Made with <span className="login__footer-love-heart">❤️</span> By Mounib</span>
      </div>
    </div>
  );
}

export default Login;
