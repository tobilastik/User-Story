import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class UserStories extends Component {
  componentDidMount () {
    const {userStory} = this.props.location.state;
    console.log (userStory);
  }

  render () {
    const {userStory} = this.props.location.state.info;
    console.log (userStory);

    return (
      <div>
        <div>
          {userStory}
        </div>
        <div className="admin-action">

          <Link className="admin-accept">Accept</Link>

          <Link className="admin-reject">Reject</Link>
        </div>
      </div>
    );
  }
}
