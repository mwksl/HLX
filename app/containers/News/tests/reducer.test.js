import expect from 'expect';
import newsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('newsReducer', () => {
  it('returns the initial state', () => {
    expect(newsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
