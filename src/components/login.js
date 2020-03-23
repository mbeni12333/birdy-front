import React from 'react';

import Field from './field.js';

const Login = () => {
  return (
    <div className="login">
      <div className="login__header">

      </div>
      <div className="login__content">
        <section class="login__content-panel login__content-panel--1">
          <div className="logobox">
            <i className="fas fa-rocket"></i>
            <h3>Birdy-app</h3>
          </div>
          <div className="login__content-panel-card login__content-panel-card--1">
            <div class="presentation">
              <h1 class="presentation__title">
                Birdy
              </h1>
              <p className="presentation__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <ul className="presentation__features">
                <li class="presentation__features-feature-box">
                    <i class="presentation__features-feature-box__icon fas fa-rocket"></i>
                    <h3 class="heading-tertiary">Straight Forwad social network</h3>
                    <p class="presentation__features-feature-box__text">
                      Lorem ipsum dolor
                    </p>
                </li>
                <li class="presentation__features-feature-box">
                    <i class="presentation__features-feature-box__icon fas fa-comment"></i>
                    <h3 class="heading-tertiary">Real time groupchat</h3>
                    <p class="presentation__features-feature-box__text">
                      Lorem ipsum dolor
                    </p>
                </li>
                <li class="presentation__features-feature-box">
                    <i class="presentation__features-feature-box__icon fas fa-chalkboard-teacher"></i>
                    <h3 class="heading-tertiary">Real time WhiteBoard</h3>
                    <p class="presentation__features-feature-box__text">
                      Lorem ipsum dolor
                    </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="login__content-panel login__content-panel--2">
          <div className="login__content-panel-card">
            <form className="login-form">
              <h1 className="login-form__title">Log In</h1>
              <Field
                id={1}
                label="Email adress"
                locked={false}
                active={false}
              />
              <Field
                id={1}
                label="Password"
                locked={false}
                active={false}
              />

              <button className="login-form__button btn btn--white">Log In</button>
              <div class="login-form__links">
                <span>Need an account? <b>Sign Up</b></span>
                <span>Forgot password? <b>Recover</b></span>
              </div>
            </form>
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
