import React, {Component} from 'react';

export default class UserStories extends Component {
  render () {
    const {info} = this.props.match.params;
    console.log (info);

    return (
      <div>
        {info}
      </div>
    );
  }
}
