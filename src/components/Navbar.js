import React, {Component} from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default class Navbar extends Component {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState ({
      menuOpen: !this.state.menuOpen,
    });
  };
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
            <Link to="/login">
              <li>Login</li>
            </Link>

          </ul>
        </div>
      </nav>
    );
  }
}
