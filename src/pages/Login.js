import React, {Component} from "react";
import "./login.css";
import orange from "./orange.png";
import img1 from "./img1.png";
import { FormErrors } from './FormErrors';

class Login extends Component {
    constructor (props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      }
    }
  
    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }
  
    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
  
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }
  
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
  
    errorClass(error) {
      return(error.length === 0 ? '' : 'has-error');
    }
  
    render () {
  
      const redirectToLog = () => {
         
          window.location.href="/AdminLog"
          
        };
        const redirectToForgot = () => {
         
          window.location.href="/Forgot"
          
        };
        const redirectToUser = () => {
         
            window.location.href="/User"
            
          };
      return (
          <div className="ev">
  
              <img src={img1} alt="img1" height={1100} width={1300}/>
        <form className="cover">
  <br></br>
        <img src={orange} alt="orange" height={100} width={100}/>
          
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            
            <input type="email" required className="form-control" name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}  />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            
            <input type="password" className="form-control" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}  />
          </div>
          <div onClick={redirectToForgot} className="forgot-btn" const path = "/Forgot">Forgot Password? Click Here</div>
          <button onClick={redirectToUser} type="submit" className="login-btn"const path = "/User" >Login</button>
        <div onClick={redirectToLog} className="forgot-btn" const path = "/AdminLog">Admin? Register Here</div>
        </form>
        </div>
      )
    }
  }

  export default Login