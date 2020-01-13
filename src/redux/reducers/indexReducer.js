import {combineReducers} from 'redux';
import storyReducer from './storyReducer';
import adminReducer from './adminReducer';

export default combineReducers ({
  story: storyReducer,
  admin: adminReducer,
});
