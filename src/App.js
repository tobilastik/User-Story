import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './screens/Login';
import About from './screens/About';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Admin from './screens/Admin';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Logout from './screens/Logout';
import UserStories from './screens/UserStories';
import Storylist from './screens/Storylist';

function App () {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route path="/logout" component={Logout} />
        <Route path="/admin/userstory" component={UserStories} />
        <Route path="/home/storylist" component={Storylist} />
      </div>
    </Router>
  );
}

export default App;
