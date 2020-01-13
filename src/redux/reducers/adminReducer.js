import {GET_STORIES_FAIL, GET_STORIES_PASS} from '../types/index';

const initialState = {
  storiesFail: '',
  storiesPass: '',
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
  }
  return state;
}
