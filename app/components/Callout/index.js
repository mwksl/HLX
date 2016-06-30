/**
*
* Callout
*
*/

import React from 'react';

import styles from './styles.css';

function Callout(props) {
  const image = props.src;
  return (
    <div className={styles.callout}>
      <section className="hero is-primary is-medium">
        <div className="hero-body" style={{ backgroundImage: `url(${image})` }}>
          <div className="container has-text-centered">
            <h3 className="title is-2">
              {props.text}
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

Callout.propTypes = {
  text: React.PropTypes.string,
  src: React.PropTypes.string,
};

export default Callout;
