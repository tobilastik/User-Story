import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './screens/Login';
import About from './screens/About';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Admin from './screens/Admin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Logout from './screens/Logout';

function App () {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
}

export default App;
