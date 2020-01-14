import React, {Component} from 'react';
import Input from '../components/Input';
import CostInput from '../components/CostInput';
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
import axios from 'axios';
import Loader from 'react-loader-spinner';
import {Redirect} from 'react-router-dom';
import apiClient from '../config/baseUrl';

class StoryForm extends Component {
  constructor (props) {
    super (props);

    this.state = {
      isLoading: false,
      redirectToStories: false,
      typeOptions: ['Enhancements', 'Bugfix', 'Development', 'QA'],
      complexityOptions: ['Low', 'Medium', 'High'],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind (this);
  }

  handleFormSubmit (e) {
    const {story} = this.props;
    e.preventDefault ();
    this.setState ({
      isLoading: true,
    });

    axios
      .post (`${apiClient}/api/createStory`, {
        storyComplexity: story.storyComplexity,
        storyDescription: story.storyDescription,
        storyType: story.storyType,
        storySummary: story.storySummary,
        estimatedTime: story.estimatedTime,
        costAssociated: story.costAssociated,
      })
      .then (({data}) => {
        console.log (data);
        this.setState ({
          isLoading: false,
          redirectToStories: true,
        });
      })
      .catch (error => {
        console.log (error);
        this.setState ({
          isLoading: false,
        });
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
    if (this.state.redirectToStories) {
      return <Redirect to="./home/storylist" />;
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography
            component="div"
            style={{backgroundColor: '#cfe8fc', height: '100vh'}}
          >
            <Input
              inputtype={'text'}
              title={'Story Summary : '}
              value={story.storySummary}
              handlechange={summary => storySummary (summary.target.value)}
            />
            <TextArea
              className="story-textArea"
              placeholder={'Enter Description here'}
              rows={6}
              value={story.storyDescription}
              name={'currentPetInfo'}
              handlechange={desc => storyDescription (desc.target.value)}
            />
            <Select
              title={'Type: '}
              name={'type'}
              options={this.state.typeOptions}
              value={story.storyType}
              placeholder={'Select Type'}
              handlechange={type => storyType (type.target.value)}
            />
            <Dropdown
              title={'Complexity: '}
              name={'complexity'}
              options={this.state.complexityOptions}
              value={story.storyComplexity}
              placeholder={'Select Complexity'}
              handlechange={complex => storyComplexity (complex.target.value)}
            />

            <Input
              inputtype={'text'}
              title={'Estimated Time: '}
              name={'name'}
              value={story.estimatedTime}
              handlechange={time => estimatedTime (time.target.value)}
            />

            <CostInput
              inputtype={'number'}
              title={'Cost Associated: $ '}
              value={story.costAssociated}
              handlechange={cost => costAssociated (cost.target.value)}
            />
            <Button
              action={this.handleFormSubmit}
              type={'primary'}
              title={'Submit'}
              style={buttonStyle}
            />
          </Typography>
        </Container>
        {this.state.isLoading
          ? <div className="loader">
              <Loader />
            </div>
          : null}

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
export default connect (mapStateToProps, mapDispatchToProps) (StoryForm);
