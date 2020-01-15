import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, CssBaseline, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {
  acceptStories,
  rejectStories,
  getStories,
  storiesPass,
} from '../redux/actions/storyAction';
import {bindActionCreators} from 'redux';

class UserStories extends Component {
  state = {
    newData: '',
  };

  componentDidMount = () => {
    const info = this.props.history.location.state.info;
    console.log ('info', info);
    this.setState ({
      newData: info,
      stories: this.props.admin,
    });
  };

  handleAccept = () => {
    const {newData, stories} = this.state;
    let loopedData = this.props.admin.storiesPass;
    loopedData.map (data => {
      {
        if (data.summary == newData.summary) {
          newData.status = 'Approved';
        }
      }
    });
    this.props.history.goBack ();
  };

  handleReject = () => {
    const {newData, stories} = this.state;
    let loopedData = this.props.admin.storiesPass;
    loopedData.map (data => {
      {
        if (data.summary == newData.summary) {
          newData.status = 'Rejected';
        }
      }
    });
    this.props.history.goBack ();
  };

  render () {
    const {newData} = this.state;

    console.log ('this.props.storiesPass', this.props.admin.storiesPass);

    return (
      <Container style={{marginTop: 22, padding: '20px', width: '100%'}}>
        <CssBaseline />
        <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              // padding: '-100px',
            }}
          >
            <h2>Name</h2>
            <h2>Description</h2>
          </div>
          <hr />

          <div className="userStory-container">
            <p>
              Summary
            </p>
            <p>{newData.summary}</p>

          </div>

          <div className="userStory-container">
            <p>
              Description
            </p>
            <p>{newData.description}</p>

          </div>
          <div className="userStory-container">
            <p>
              Type
            </p>
            <p>{newData.type}</p>

          </div>
          <div className="userStory-container">
            <p>
              Complexity
            </p>
            <p>{newData.complexity}</p>

          </div>

          <div className="userStory-container">
            <p>
              Estimated time for completion
            </p>
            <p>{newData.estimatedHrs}</p>

          </div>
          <div className="userStory-container">
            <p>
              Cost associated
            </p>
            <p>{newData.cost}</p>
          </div>

          <hr
            style={{
              height: '20px',
              backgroundColor: 'white',
            }}
          />
        </Typography>

        <div className="admin-action">
          <Link onClick={this.handleAccept} className="admin-accept">
            Accept
          </Link>
          <Link onClick={this.handleReject} className="admin-reject">
            Reject
          </Link>
        </div>
        <div className="space" />
      </Container>
    );
  }
}

UserStories.defaultProps = {
  info: [],
};

const mapStateToProps = state => ({
  admin: state.admin,
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators (
//     {acceptStories, rejectStories, getStories, storiesPass},
//     dispatch
//   );
// };

export default connect (mapStateToProps) (UserStories);
