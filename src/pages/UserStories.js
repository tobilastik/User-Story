import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, CssBaseline, Typography} from '@material-ui/core';
import {connect} from 'react-redux';

class UserStories extends Component {
  state = {
    selectedStories: this.props.history.location.state.info,
    passedStories: this.props.admin.storiesPass,
  };

  //loop over passed stories from redux, compare it with the current data admin wants to accept/reject(by using a unique key in both data which is summary)
  handleAccept = () => {
    const {selectedStories, passedStories} = this.state;
    passedStories.map (data => {
      {
        if (data.summary == selectedStories.summary) {
          selectedStories.status = 'Approved';
        }
      }
    });
    this.props.history.goBack ();
  };

  handleReject = () => {
    const {selectedStories, passedStories} = this.state;
    passedStories.map (data => {
      {
        if (data.summary == selectedStories.summary) {
          selectedStories.status = 'Rejected';
        }
      }
    });
    this.props.history.goBack ();
  };

  render () {
    const {selectedStories} = this.state;

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
            <p>{selectedStories.summary}</p>

          </div>

          <div className="userStory-container">
            <p>
              Description
            </p>
            <p>{selectedStories.description}</p>

          </div>
          <div className="userStory-container">
            <p>
              Type
            </p>
            <p>{selectedStories.type}</p>

          </div>
          <div className="userStory-container">
            <p>
              Complexity
            </p>
            <p>{selectedStories.complexity}</p>

          </div>

          <div className="userStory-container">
            <p>
              Estimated time for completion
            </p>
            <p>{selectedStories.estimatedHrs}</p>

          </div>
          <div className="userStory-container">
            <p>
              Cost associated
            </p>
            <p>{selectedStories.cost}</p>
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

const mapStateToProps = state => ({
  admin: state.admin,
});

export default connect (mapStateToProps) (UserStories);
