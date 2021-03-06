import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Redirect, NavLink} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import apiClient from '../config/baseUrl';
import axios from 'axios';

const validEmailRegex = RegExp (
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values (errors).forEach (val => val.length > 0 && (valid = false));
  return valid;
};

export default class Login extends Component {
  constructor (props) {
    super (props);
    const token = localStorage.getItem ('token');
    const adminToken = localStorage.getItem ('admintoken');

    let userLoggedIn = true;
    let adminLoggedIn = true;

    if (token == null) {
      userLoggedIn = false;
    }
    if (adminToken == null) {
      adminLoggedIn = false;
    }

    this.state = {
      isLoading: false,
      loggedIn: false,
      email: '',
      password: '',
      checked: false,
      errors: {
        email: '',
        password: '',
      },
      userLoggedIn,
      adminLoggedIn,
    };
  }

  handleChange = event => {
    event.preventDefault ();
    const {name, value} = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email':
        errors.email = validEmailRegex.test (value)
          ? ''
          : 'Email is not valid!';
        break;
      case 'password':
        errors.password = value.length < 4
          ? 'Password must be at least 4 characters long!'
          : '';
        break;
      default:
        break;
    }

    this.setState ({errors, [name]: value});
  };

  handleSubmit = event => {
    event.preventDefault ();
    if (validateForm (this.state.errors)) {
      this.setState ({
        isLoading: true,
      });

      this.loginUser ();
    } else {
      console.error ('Invalid Form');
    }
  };

  loginUser = async () => {
    this.setState ({
      isLoading: true,
    });
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    {
      this.state.checked
        ? axios
            .post (`${apiClient}/api/admin-login`, {user})
            .then (response => {
              console.log (response);
              localStorage.setItem ('token', 'randomstringtokentopersistdata');
              localStorage.setItem (
                'admintoken',
                'randomstringadmintokentopersistdata'
              );
              this.setState ({
                adminLoggedIn: true,
                userLoggedIn: false,
                isLoading: false,
                loggedIn: true,
              });
            })
            .catch (error => {
              console.log (`error is ${error.response}`);
            })
        : axios
            .post (`${apiClient}/api/login`, {
              user,
            })
            .then (response => {
              console.log (response);
              localStorage.setItem ('token', 'randomstringtokentopersistdata');
              this.setState ({
                userLoggedIn: true,
                adminLoggedIn: false,
                isLoading: false,
                loggedIn: false,
              });
            })
            .catch (error => {
              console.log (`error is ${error.response}`);
              this.setState ({
                userLoggedIn: false,
                adminLoggedIn: false,
                isLoading: false,
              });
            });
    }
  };
  handleCheckbox = () => {
    this.setState ({
      checked: !this.state.checked,
    });
  };
  render () {
    if (this.state.userLoggedIn) {
      return <Redirect to="/home" />;
    } else if (this.state.adminLoggedIn) {
      return <Redirect to="/admin" />;
    }

    const {errors} = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Login to create a story</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 &&
                <span className="error">{errors.email}</span>}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 &&
                <span className="error">{errors.password}</span>}
            </div>
            <div className="info">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleCheckbox}
                    value="checked"
                  />
                }
                label="Login as Admin"
              />
            </div>
            <div className="submit">
              <button>Submit</button>
            </div>
          </form>
        </div>
        {this.state.isLoading
          ? <div className="loader">
              <Loader />
            </div>
          : null}
      </div>
    );
  }
}
