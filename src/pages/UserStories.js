import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, CssBaseline, Typography} from '@material-ui/core';

export default class UserStories extends Component {
  componentDidMount () {
    const {userStory} = this.props.location.state;
    console.log (userStory);
  }

  render () {
    const info = this.props.history.location.state.info;
    console.log (info);
    let newData = info;
    // console.log (newData);

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

          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            <p>
              Summary
            </p>
            <p>{newData.summary}</p>

          </div>

          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            <p>
              Description
            </p>
            <p>{newData.description}</p>

          </div>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            <p>
              Type
            </p>
            <p>{newData.type}</p>

          </div>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            <p>
              Complexity
            </p>
            <p>{newData.complexity}</p>

          </div>

          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            <p>
              Estimated time for completion
            </p>
            <p>{newData.estimatedHrs}</p>

          </div>
          <div
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px',
            }}
          >
            <p>
              Cost associated
            </p>
            <p>{newData.status}</p>
          </div>

          <hr
            style={{
              height: '20px',
              backgroundColor: 'white',
            }}
          />
        </Typography>

        <div className="admin-action">
          <Link className="admin-accept">Accept</Link>
          <Link className="admin-reject">Reject</Link>
        </div>
        <div className="space" />
      </Container>
    );
  }
}
