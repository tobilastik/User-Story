import React, {Component} from 'react';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button';
import {Container, CssBaseline, Typography} from '@material-ui/core';
import Dropdown from '../components/Dropdown';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  storyComplexity,
  storyDescription,
  storyType,
  storySummary,
  estimatedTime,
  costAssociated,
} from '../redux/actions/storyAction';

class FormContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {
      newUser: {
        name: '',
        age: '',
        type: '',
        skills: [],
        about: '',
        complexity: '',
      },

      typeOptions: ['Enhancements', 'Bugfix', 'Development', 'QA'],
      complexityOptions: ['Low', 'Medium', 'High'],
    };
    this.handleTextArea = this.handleTextArea.bind (this);
    this.handleAge = this.handleAge.bind (this);
    this.handleFullName = this.handleFullName.bind (this);
    this.handleFormSubmit = this.handleFormSubmit.bind (this);
    this.handleClearForm = this.handleClearForm.bind (this);
    this.handleInput = this.handleInput.bind (this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName (e) {
    let value = e.target.value;
    this.setState (
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value,
        },
      }),
      () => console.log (this.state.newUser)
    );
  }

  handleAge (e) {
    let value = e.target.value;
    this.setState (
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value,
        },
      }),
      () => console.log (this.state.newUser)
    );
  }

  handleInput (e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState (
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value,
        },
      }),
      () => console.log (this.state.newUser)
    );
  }

  handleTextArea (e) {
    console.log ('Inside handleTextArea');
    let value = e.target.value;
    this.setState (
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value,
        },
      }),
      () => console.log (this.state.newUser)
    );
  }

  handleFormSubmit (e) {
    e.preventDefault ();
    let userData = this.state.newUser;

    fetch ('http://example.com', {
      method: 'POST',
      body: JSON.stringify (userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then (response => {
      response.json ().then (data => {
        console.log ('Successful' + data);
      });
    });
  }

  handleClearForm (e) {
    e.preventDefault ();
    this.setState ({
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: '',
      },
    });
  }

  render () {
    const {
      storyComplexity,
      storyDescription,
      storyType,
      storySummary,
      estimatedTime,
      costAssociated,
      story,
    } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography
            component="div"
            style={{backgroundColor: '#cfe8fc', height: '100vh'}}
          >
            <Input
              inputType={'text'}
              title={'Story Summary : '}
              name={'name'}
              value={story.storySummary}
              handlechange={summary => storySummary (summary)}
            />
            <TextArea
              className="story-textArea"
              placeholder={'Enter Description here'}
              rows={6}
              value={story.storyDescription}
              name={'currentPetInfo'}
              handlechange={desc => storyDescription (desc)}
            />
            <Select
              title={'Type: '}
              name={'type'}
              options={this.state.typeOptions}
              value={story.storyType}
              placeholder={'Select Type'}
              handlechange={type => storyDescription (type)}
            />
            <Dropdown
              title={'Complexity: '}
              name={'complexity'}
              options={this.state.complexityOptions}
              value={story.storyComplexity}
              placeholder={'Select Complexity'}
              handlechange={this.handleInput}
            />

            <Input
              inputType={'text'}
              title={'Estimated Time: '}
              name={'name'}
              value={story.estimatedTime}
              handlechange={this.handleInput}
            />
            <Input
              inputType={'number'}
              name={'age'}
              title={'Cost Associated: '}
              value={story.costAssociated}
              handlechange={this.handleAge}
            />

            <Button
              action={this.handleFormSubmit}
              type={'primary'}
              title={'Submit'}
              style={buttonStyle}
            />
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

const buttonStyle = {
  backgroundColor: '#fec151',
};

function mapStateToProps (state) {
  return {
    story: state.story,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators (
    {
      storyComplexity,
      storyDescription,
      storyType,
      storySummary,
      estimatedTime,
      costAssociated,
    },
    dispatch
  );
}
export default connect (mapStateToProps, mapDispatchToProps) (FormContainer);
