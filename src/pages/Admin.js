import React, {Component} from 'react';
import {Container, CssBaseline, Typography} from '@material-ui/core';
import {Redirect, Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {connect} from 'react-redux';
import {getStories} from '../redux/actions/storyAction';
import {bindActionCreators} from 'redux';

class Admin extends Component {
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

  // check if data is already in stories pass, if not, fetch data from api in the redux file
  componentWillMount () {
    !this.props.admin.storiesPass
      ? this.props.getStories ()
      : console.log ('ok');
  }

  render () {
    const {admin} = this.props;
    console.log ('admin', admin);
    const adminData = Array.from (admin.storiesPass);

    if (this.state.adminLoggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <Container style={{marginTop: 22, padding: '20px', width: '100%'}}>
        <CssBaseline />
        <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>
          {adminData.map (info => {
            return (
              <Link
                style={{textDecoration: 'none', color: 'black'}}
                key={info.summary}
                to={{
                  pathname: '/admin/userstory',
                  state: {info: info},
                }}
              >
                <div className="storyList-container">
                  <h2>Name</h2>
                  <h2>Description</h2>
                </div>
                <hr />

                <div className="storyList-container">
                  <p>
                    Summary
                  </p>
                  <p>{info.summary}</p>

                </div>

                <div className="storyList-container">
                  <p>
                    Description
                  </p>
                  <p>{info.description}</p>

                </div>
                <div className="storyList-container">
                  <p>
                    Type
                  </p>
                  <p>{info.type}</p>

                </div>
                <div className="storyList-container">
                  <p>
                    Complexity
                  </p>
                  <p>{info.complexity}</p>

                </div>

                <div className="storyList-container">
                  <p>
                    Estimated time for completion
                  </p>
                  <p>{info.estimatedHrs}</p>

                </div>
                <div className="storyList-container">
                  <p>
                    Cost associated
                  </p>
                  <p>${info.cost}</p>
                </div>

                <div
                  style={{
                    backgroundColor: info.status === 'rejected'
                      ? 'red'
                      : 'green',
                  }}
                >
                  <div className="storyList-container">
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
          })}

        </Typography>
        {this.state.isLoading
          ? <div className="loader">
              {' '}<Loader />{' '}
            </div>
          : null}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  admin: state.admin,
});

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({getStories}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps) (Admin);
