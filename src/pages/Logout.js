import React, {Component} from 'react';

export default class Logout extends Component {
  constructor (props) {
    super (props);
    localStorage.removeItem ('token');
    this.state = {};
  }

  render () {
    return (
      <div>
        Logout
      </div>
    );
  }
}
