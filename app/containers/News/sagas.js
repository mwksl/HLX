/**
 * Gets the most recent tweets from the HLX twitter account
 */

/* eslint-disable no-constant-condition */

import { take, call, put } from 'redux-saga/effects';

import { LOAD_TWEETS } from 'containers/News/constants';
import { tweetsLoaded, tweetsLoadingError } from 'containers/News/actions';

import request from 'utils/request';

// Bootstrap sagas
export default [
  getTwitterData,
];

// Individual exports for testing
export function* getTwitterData() {
  while (true) {
    yield take(LOAD_TWEETS);
    const requestURL = 'https://api.github.com/users/mwksl/repos?type=all&sort=updated';

    // Use call from redux-saga
    const tweets = yield call(request, requestURL);

    // Return an object in JSON format
    if (tweets.err === undefined || tweets.err === null) {
      yield put(tweetsLoaded(tweets.data));
    } else {
      console.log(tweets.err.response); // eslint-disable-line no-console
      yield put(tweetsLoadingError(tweets.err));
    }
  }
}
