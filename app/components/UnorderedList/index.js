import React from 'react';

import styles from './styles.css';

function UnorderedList(props) {
  return (
    <ul className={styles.listWrap}>
      {props.children}
    </ul>
  );
}

UnorderedList.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default UnorderedList;
