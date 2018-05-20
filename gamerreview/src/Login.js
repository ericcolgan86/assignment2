import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import session from './sessionCache';
import * as api from './stubAPI/stubUserAPI';
import { withRouter} from 'react-router-dom';
import Recaptcha from 'react-recaptcha';


class Login extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      captcha: false,
      error:"",
      success:""
    };
  }




  validateForm() {
    //return this.state.username.length > 0 && this.state.password.length > 0;
    return this.state.username.length > 0 && this.state.password.length > 0 && this.state.captcha;
  }

  async handleLogin(event){
    const resp = await api.login(this.state.username, this.state.password);
    if(resp.success === true){
      session.setSession(true);
      session.setUser(this.state.username);
      this.props.history.push('/games');
    }
    else
    {
      // this.recaptcha.reset();
      this.setState({
        username: "",
        password: "",
        captcha: false,
        error:resp.msg,
        success:""
      })
    }
  }

  async handleSignup(event){
    let result = await api.add(this.state.username, this.state.password);
    if(result.success === true){
      this.setState({
        success:"Sign up successful, Login",
        error:"",
      })
    }
    else
    {
      //this.recaptcha.reset();
      this.setState({
        success:"",
        error:result.msg,
        captcha: false
      })
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
 
  verifyCallback(value) {
    console.log("verify:", value);
      this.setState({captcha: true});
  }


  render() {
    return (
      
      <div className="Login">
        {this.state.error}
        {this.state.success}
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>UserName</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
            <Recaptcha
              ref={e => this.recaptcha = e}
              sitekey="6LeGP00UAAAAAHhY-prpaSVOMYEoOWExqYIF6eXs"
              render="explicit"
              verifyCallback={this.verifyCallback.bind(this)}
            />        
            
          </FormGroup>

          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.handleLogin.bind(this)}
          >
            Login
          </Button>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            onClick={this.handleSignup.bind(this)}
          >
            Signup
          </Button>
        </form>
        
      </div>
    );
  }
}

  
export default withRouter(Login);
