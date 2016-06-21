/*
 *
 * News
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { createSelector } from 'reselect';

import {
  selectLoading,
  selectError,
  selectTweets,
} from 'containers/App/selectors';

import { loadTweets } from './actions';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import Tweet from 'components/Tweet';

import styles from './styles.css';

export class News extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator} />);

    // Show errors if any exist
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListItem content={'Something went wrong :( please try again!'} />
      );
      mainContent = (<List component={ErrorComponent} />);

    // If it's not loading, we don't have an error, and tweets exist...
    } else if (this.props.tweets !== false) {
      mainContent = (<List items={this.props.tweets} component={Tweet} />);
    }

    return (
      <div className={styles.news}>
      {mainContent}
      </div>
    );
  }
}

News.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  tweets: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
};

function mapDispatchToProps(dispatch) {
  return {
    componentDidMount: (evt) => {
      evt.preventDefault();
      dispatch(loadTweets());
    },
    dispatch,
  };
}

export default connect(createSelector(
  selectTweets(),
  selectLoading(),
  selectError(),
  (tweets, loading, error) => ({ tweets, loading, error })
), mapDispatchToProps)(News);
