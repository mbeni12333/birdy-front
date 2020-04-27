import React from 'react';
import Field from '../components/field.js';
import {Link} from 'react-router-dom';
import {API,  formDataToJSON} from '../api/birdyapi.js';


class SignUpForm extends React.Component{


  signup = (e) => {
    e.preventDefault();
    const data = formDataToJSON(e.target);
    
    API.signup(data, () => {

    });
  }

  render(){
    return(
      <form className="login-form" onSubmit={(e) => this.signup(e)}>
        <h1 className="login-form__title">Sign UP</h1>
        <div className="login-form__name">
          <Field
            id={1}
            label="First name"
            locked={false}
            active={false}
            name="firstname"
          />
          <Field
            id={1}
            label="Last name"
            locked={false}
            active={false}
            name="lastname"
          />
        </div>
        <Field
          id={1}
          label="Username"
          locked={false}
          active={false}
          name="username"
        />
        <Field
          id={1}
          label="Password"
          locked={false}
          active={false}
          name="password"
          type="password"
        />
        <Field
          id={1}
          label="Email"
          locked={false}
          active={false}
          name="email"
        />

        <Field
          id={1}
          label="Birthday"
          locked={false}
          active={false}
          name="birthday"
        />
        <button
        className="login-form__button btn btn--white">Sign Up</button>
        <div className="login-form__links">
          <span>Have an account? <Link to="/login"><b>Log in</b></Link></span>
          <span>Forgot password? <b>Recover</b></span>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
