import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, CssBaseline, Typography} from '@material-ui/core';
import {connect} from 'react-redux';

class UserStories extends Component {
  state = {
    newData: '',
    selectedStories: this.props.history.location.state.info,
  };

  componentDidMount = () => {
    this.setState ({
      newData: this.state.selectedStories,
      stories: this.props.admin,
    });
  };

  //loop over passed stories from redux, compare it with the current data admin wants to accept(by using a unique key in both data which is summary)
  handleAccept = () => {
    const {newData} = this.state;
    let passedStories = this.props.admin.storiesPass;
    passedStories.map (data => {
      {
        if (data.summary == newData.summary) {
          newData.status = 'Approved';
        }
      }
    });
    this.props.history.goBack ();
  };

  handleReject = () => {
    const {newData} = this.state;
    let passedStories = this.props.admin.storiesPass;
    passedStories.map (data => {
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

const mapStateToProps = state => ({
  admin: state.admin,
});

export default connect (mapStateToProps) (UserStories);
