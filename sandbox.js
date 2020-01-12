import React, {Component} from 'react';
import {Container, CssBaseline, Typography} from '@material-ui/core';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import apiClient from '../config/baseUrl';

export default class Admin extends Component {
  constructor (props) {
    super (props);
    this.state = {
      userStory: [],
      summary: '',
      description: '',
      type: '',
      complexity: '',
      estimated: '',
      cost: '',
      isLoading: false,
    };
    const adminToken = localStorage.getItem ('admintoken');

    let adminLoggedIn = true;
    if (adminToken == null) {
      adminLoggedIn = false;
    }
    this.state = {
      adminLoggedIn,
    };
  }
  async componentDidMount () {
    this.setState ({
      isLoading: true,
    });
    axios ({
      method: 'get',
      url: `${apiClient}/api/getStories`,
    }).then (({data}) => {
      console.log (data);
      this.setState ({
        userStory: data,
        isLoading: false,
      });
      console.log (this.state.userStory);
    });
  }

  render () {
    const {userStory} = this.state;
    if (this.state.adminLoggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <Container style={{marginTop: 22, padding: '20px', width: '100%'}}>
        <CssBaseline />
        <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>
          {userStory
            ? userStory.map (info => {
                return (
                  <Link
                    key={info.summary}
                    to={{
                      pathname: '/admin/userstory',
                      state: {info: info},
                    }}
                  >
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
                      <p>{info.summary}</p>

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
                      <p>{info.description}</p>

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
                      <p>{info.type}</p>

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
                      <p>{info.complexity}</p>

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
                      <p>{info.estimatedHrs}</p>

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
                      <p>{info.cost}</p>
                    </div>

                    <div
                      style={{
                        backgroundColor: info.status === 'rejected'
                          ? 'red'
                          : 'green',
                      }}
                    >
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
                        <p style={{padding: '20px'}}>{info.status}</p>
                      </div>
                    </div>
                    <hr
                      style={{
                        height: '20px',
                        backgroundColor: 'white',
                      }}
                    />
                  </Link>
                );
              })
            : null}

        </Typography>
        {this.state.isLoading
          ? <div
              style={{
                width: '100%',
                height: '100',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {' '}<Loader />{' '}
            </div>
          : null}
      </Container>
    );
  }
}
