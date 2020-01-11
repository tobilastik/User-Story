import {
  STORY_COMPLEXITY,
  STORY_DESCRIPTION,
  STORY_TYPE,
  STORY_SUMMARY,
  ESTIMATED_TIME,
  COST_ASSOCIATED,
} from '../types/index';

const initialState = {
  storyComplexity: '',
  storyDescription: '',
  storyType: '',
  storySummary: '',
  estimatedTime: '',
  costAssociated: '',
};

export default function storyReducer (state = initialState, action) {
  switch (action.type) {
    case STORY_SUMMARY:
      return Object.assign ({}, state, {
        storySummary: action.payload,
      });
    case STORY_COMPLEXITY:
      return Object.assign ({}, state, {
        storyComplexity: action.payload,
      });
    case STORY_DESCRIPTION:
      return Object.assign ({}, state, {
        storyDescription: action.payload,
      });
    case STORY_TYPE:
      return Object.assign ({}, state, {
        storyType: action.payload,
      });
    case ESTIMATED_TIME:
      return Object.assign ({}, state, {
        estimatedTime: action.payload,
      });
    case COST_ASSOCIATED:
      return Object.assign ({}, state, {
        costAssociated: action.payload,
      });
  }
  return state;
}
