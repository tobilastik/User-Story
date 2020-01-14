import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default class Navbar extends Component {
  constructor (props) {
    super (props);
    this.state = {
      loggedinasuser: false,
    };

    const token = localStorage.getItem ('token');
    const adminToken = localStorage.getItem ('admintoken');

    console.log (token);
  }

  componentDidMount () {
    if (localStorage.getItem ('token')) {
      this.setState ({loggedinasuser: true});
    } else {
      this.setState ({loggedinasuser: false});
    }
  }

  render () {
    let btnText = this.state.loggedinasuser ? 'Logout' : 'Login';
    const {loggedinasuser} = this.state;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} style={{width: 200}} alt="User Story" />
            </Link>
          </div>
          <ul className="nav-links">
            {loggedinasuser == true
              ? <Link to="/logout">
                  <li>{btnText}</li>
                </Link>
              : <Link to="/login">
                  <li>{btnText}</li>
                </Link>}
          </ul>
        </div>
      </nav>
    );
  }
}
