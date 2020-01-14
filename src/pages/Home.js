import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import StoryForm from '../containers/StoryForm';

export default class Home extends Component {
  constructor (props) {
    super (props);

    const token = localStorage.getItem ('token');
    console.log (token);

    let userLoggedIn = true;
    if (token == null) {
      userLoggedIn = false;
    }
    this.state = {
      userLoggedIn,
    };
  }

  render () {
    if (this.state.userLoggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>Create User Story</h1>
        <StoryForm />
      </div>
    );
  }
}
