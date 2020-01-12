import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default class Navbar extends Component {
  constructor (props) {
    super (props);

    const token = localStorage.getItem ('token');
    console.log (token);

    let adminLoggedIn = true;
    let userLoggedIn = true;
    if (token == null) {
      adminLoggedIn = false;
      userLoggedIn = false;
    }
    this.state = {
      adminLoggedIn,
      userLoggedIn,
    };
  }

  render () {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} style={{width: 200}} alt="User Story" />
            </Link>
          </div>
          <ul className="nav-links">
            {this.state.userLoggedIn && this.state.adminLoggedIn
              ? <Link to="/logout">
                  <li>Logout</li>
                </Link>
              : <Link to="/login">
                  <li>Login</li>
                </Link>}
          </ul>
        </div>
      </nav>
    );
  }
}
