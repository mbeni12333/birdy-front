import React from 'react';
import Field from '../components/field.js';
import {Link, Redirect} from 'react-router-dom';

import {API,  formDataToJSON} from '../api/birdyapi.js';

class LoginForm extends React.Component{

  state = {
    redirectToReferrer:false
  };

  constructor(props){
    super(props);
  }



  login = (e) => {
    e.preventDefault();
    const data = formDataToJSON(e.target);

    API.getToken(data, (token) => {
      this.setState({
        redirectToReferrer: true
      });
    });
  }

  render(){

    const {redirectToReferrer} = this.state;
    const {from} = this.props.location.state || {from: {pathname:'/'}};

    if(redirectToReferrer === true){
      return <Redirect to={from}/>
    }

    return(
      <form className="login-form" onSubmit={(e) => this.login(e)}>
        <h1 className="login-form__title">Log In</h1>
        <Field
          id={1}
          label="Username"
          locked={false}
          active={false}
          name="username"
          required={true}
        />
        <Field
          id={1}
          label="Password"
          locked={false}
          active={false}
          name="password"
          type="password"
          required={true}
        />


        <button
        className="login-form__button btn btn--white">Log In</button>

        <div className="login-form__links">
          <span>Need an account? <br/><Link to="/login/signup"><b>Sign Up</b></Link></span>
          <span>Forgot password? <br/><Link to="/login/recover"><b>Recover</b></Link></span>
        </div>
      </form>
    );
  }
}


export default LoginForm;
