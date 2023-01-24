import React, {Component} from "react";
import "./log.css";
import orange from "./orange.png";
import img1 from "./img1.png";
import { FormErrors } from './FormErrors';



class AdminLog extends Component {
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
  
      const redirectToLogin = () => {
         
          window.location.href="/Login"
        };
        const redirectToDash = () => {
         
            window.location.href="/Dashboard"
          };
      return (
          <div className="ev">
            
              <img src={img1} alt="img1" height={1100} width={1300}/>
        <form className="cover">
        <p className="ad">Admin Login</p>
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
         
          <button onClick={redirectToDash} type="submit" className="login-btn" const path = "/Dashboard" >Login</button>
        <button onClick={redirectToLogin} className="back-btn" const path = "/Login">Back</button>
        
        </form>
        </div>
      )
    }
  }

export default AdminLog