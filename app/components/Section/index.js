import React from 'react';

import styles from './styles.css';

function Section(props) {
  const background = props.type ? styles.dark : styles.light;

  return (
    <section className={`section ${background}`}>
      <div className="container">
        <div className="heading">
          <h1 className={`title title${background}`}>{props.title}</h1>
          <h2 className="subtitle">
            {props.subtitle}
          </h2>
        </div>
        <hr />
        {props.children}
      </div>
    </section>
  );
}

Section.propTypes = {
  type: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Section;
