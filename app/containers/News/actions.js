/*
 *
 * News actions
 *
 */

import {
  LOAD_TWEETS,
  LOAD_TWEETS_SUCCESS,
  LOAD_TWEETS_ERROR,
} from './constants';

/**
 * Load the tweets, this action starts the getTwitterData saga
 *
 * @return {object} An action object with a type of LOAD_TWEETS
 */

export function loadTweets() {
  return {
    type: LOAD_TWEETS,
  };
}

/**
 * Dispatched when the tweets are loaded by the getTwitterData saga
 *
 * @param {array} tweets The twitter data
 *
 * @return {object} An action object with a type of LOAD_TWEETS_SUCCESS
 */
export function tweetsLoaded(tweets) {
  return {
    type: LOAD_TWEETS_SUCCESS,
    tweets,
  };
}

/**
 * Dispatched when loading the tweets fails
 *
 * @param {object} error The error
 *
 * @return {object} An action object with a type of LOAD_TWEETS_ERROR
 */
export function tweetsLoadingError(error) {
  return {
    type: LOAD_TWEETS_ERROR,
    error,
  };
}
