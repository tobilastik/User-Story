import {
  GET_STORIES_FAIL,
  GET_STORIES_PASS,
  ACCEPT_STORIES,
  REJECT_STORIES,
} from '../types/index';

const initialState = {
  storiesFail: '',
  storiesPass: '',
  acceptStories: '',
  rejectStories: '',
};

export default function adminReducer (state = initialState, action) {
  switch (action.type) {
    case GET_STORIES_PASS:
      return Object.assign ({}, state, {
        storiesPass: action.payload,
      });
    case GET_STORIES_FAIL:
      return Object.assign ({}, state, {
        storiesFail: action.payload,
      });
    case ACCEPT_STORIES:
      return Object.assign ({}, state, {
        acceptStories: action.payload,
      });
    case REJECT_STORIES:
      return Object.assign ({}, state, {
        rejectStories: action.payload,
      });
  }
  return state;
}
