/*
 *
 * News reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_TWEETS,
  LOAD_TWEETS_SUCCESS,
  LOAD_TWEETS_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  tweets: false,
});

function newsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TWEETS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('tweets', false);
    case LOAD_TWEETS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('tweets', action.tweets);
    case LOAD_TWEETS_ERROR:
      return state
        .set('loading', false)
        .set('error', true);
    default:
      return state;
  }
}

export default newsReducer;
