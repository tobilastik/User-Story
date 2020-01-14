import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Admin from './pages/Admin';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Logout from './pages/Logout';
import UserStories from './pages/UserStories';
import Storylist from './pages/Storylist';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar />

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
