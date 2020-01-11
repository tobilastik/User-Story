import React, {Component} from 'react';
import {Container, CssBaseline, Typography} from '@material-ui/core';

export default class Admin extends Component {
  render () {
    return (
      <Container style={{marginTop: 22, width: '70%'}}>
        <CssBaseline />
        <Typography
          component="div"
          style={{backgroundColor: '#cfe8fc', height: '100vh'}}
        >
          <div>
            <div
              style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '40px',
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
              <p>ddndn</p>

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
              <p>ddndn</p>

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
              <p>ddndn</p>

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
              <p>ddndn</p>

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
              <p>ddndn</p>

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
              <p>ddndn</p>
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
                Status
              </p>
              <p>Accepted</p>

            </div>

          </div>
        </Typography>
      </Container>
    );
  }
}
