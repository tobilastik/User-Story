import {
  STORY_COMPLEXITY,
  STORY_DESCRIPTION,
  STORY_TYPE,
  STORY_SUMMARY,
  ESTIMATED_TIME,
  COST_ASSOCIATED,
} from '../types/index';

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
