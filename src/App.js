import React, {Component} from 'react';
import './App.css';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Admin from './pages/Admin';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Logout from './pages/Logout';
import UserStories from './pages/UserStories';
import Storylist from './pages/Storylist';
import {Link} from 'react-router-dom';
import logo from '../src/assets/images/logo.png';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      loggedInAsUser: false,
      loggedInAsAdmin: false,
    };
    const token = localStorage.getItem ('token');
    const adminToken = localStorage.getItem ('admintoken');
  }
  componentDidMount () {
    if (localStorage.getItem ('token')) {
      this.setState ({loggedInAsUser: true});
    } else {
      this.setState ({loggedInAsUser: false});
    }
    if (localStorage.getItem ('admintoken')) {
      this.setState ({loggedInAsAdmin: true});
    } else {
      this.setState ({loggedInAsAdmin: false});
    }
  }
  renderButton () {
    const {loggedInAsAdmin, loggedInAsUser} = this.state;
    if (loggedInAsUser || loggedInAsAdmin) {
      return (
        <Link to="/logout">
          <li>Logout</li>
        </Link>
      );
    } else {
      return (
        <Link to="/login">
          <li>Login</li>
        </Link>
      );
    }
  }
  renderNavBar () {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} style={{width: 200}} alt="User Story" />
            </Link>
          </div>
          <ul className="nav-links">
            {this.renderButton ()}
          </ul>
        </div>
      </nav>
    );
  }
  render () {
    return (
      <Router>
        <div className="App">
          {this.renderNavBar ()}
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/logout" component={Logout} />
          <Route path="/admin/userstory" component={UserStories} />
          <Route path="/home/storylist" component={Storylist} />
        </div>
      </Router>
    );
  }
}

export default App;
