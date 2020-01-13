import {
  STORY_COMPLEXITY,
  STORY_DESCRIPTION,
  STORY_TYPE,
  STORY_SUMMARY,
  ESTIMATED_TIME,
  COST_ASSOCIATED,
  GET_STORIES_FAIL,
  GET_STORIES_PASS,
} from '../types/index';

import axios from 'axios';
import apiClient from '../../config/baseUrl';

export const storyComplexity = value => {
  return {
    type: STORY_COMPLEXITY,
    payload: value,
  };
};

export const storyDescription = value => {
  return {
    type: STORY_DESCRIPTION,
    payload: value,
  };
};
export const storyType = value => {
  return {
    type: STORY_TYPE,
    payload: value,
  };
};

export const storySummary = value => {
  return {
    type: STORY_SUMMARY,
    payload: value,
  };
};

export const estimatedTime = value => {
  return {
    type: ESTIMATED_TIME,
    payload: value,
  };
};
export const costAssociated = value => {
  return {
    type: COST_ASSOCIATED,
    payload: value,
  };
};

export const storiesPass = data => {
  return {
    type: GET_STORIES_PASS,
    payload: data,
  };
};

export const storiesFail = err => {
  return {
    type: GET_STORIES_FAIL,
    payload: err,
  };
};

export const getStories = request => {
  console.log (request);
  return dispatch => {
    axios
      .get (`${apiClient}/api/getStories`)
      .then (res => {
        dispatch (storiesPass (res.data));
      })
      .catch (err => dispatch (storiesFail (err)));
  };
};
