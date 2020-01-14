import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Logout extends Component {
  constructor (props) {
    super (props);
    localStorage.removeItem ('token');
    localStorage.removeItem ('admintoken');
    this.state = {};
  }

  render () {
    return (
      <div>
        <div>
          Succesfully Logged Out
        </div>

        <Link to="/">Go to homepage</Link>
      </div>
    );
  }
}
