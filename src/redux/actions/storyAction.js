import {
  STORY_COMPLEXITY,
  STORY_DESCRIPTION,
  STORY_TYPE,
  STORY_SUMMARY,
  ESTIMATED_TIME,
  COST_ASSOCIATED,
  GET_STORIES_FAIL,
  GET_STORIES_PASS,
  ACCEPT_STORIES,
  REJECT_STORIES,
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

export const acceptStories = value => {
  return {
    type: ACCEPT_STORIES,
    payload: value,
  };
};

export const rejectStories = value => {
  return {
    type: REJECT_STORIES,
    payload: value,
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

export const acceptActionOnStories = request => {
  console.log (request);
  return dispatch => {
    axios
      .get (`${apiClient}/api/getStories`)
      .then (res => {
        dispatch (acceptStories (res.data.status));
      })
      .catch (err => dispatch (storiesFail (err)));
  };
};

// export const acceptActionStories = request => {
//   console.log (request);
//   return dispatch => {
//     axios
//       .get (`${apiClient}/api/getStories`)
//       .then (res => {
//         dispatch ({type: 'ACCEPT_USERS', payload: response.data});
//       })
//       .catch (err => {
//         dispatch ({type: 'REJECT_USERS', payload: err});
//       });
//   };
// };

export const rejectActionOnStories = request => {
  console.log (request);
  return dispatch => {
    axios
      .get (`${apiClient}/api/getStories`)
      .then (res => {
        dispatch (rejectStories (res.data.status));
      })
      .catch (err => dispatch (storiesFail (err)));
  };
};
