import React from 'react';

import styles from './styles.css';

function Section(props) {
  const background = props.type ? styles.dark : styles.light;

  return (
    <section className={`section ${background}`}>
      <div className="container">
        <div className="heading">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">
            {props.subtitle}
          </h2>
        </div>
        {props.children}
      </div>
    </section>
  );
}

Section.propTypes = {
  type: React.PropTypes.String,
  title: React.PropTypes.String,
  subtitle: React.PropTypes.String,
  children: React.PropTypes.node.isRequired,
};

export default Section;
