import React from 'react';

import styles from './styles.css';

function Section(props) {
  const sectionBody = props.dark ? (
    <section className={`section ${styles.dark}`}>
      <div className="container">
        <div className="heading">
          <h1 className={`title ${styles.titledark}`}>{props.title}</h1>
          <h2 className="subtitle">
            {props.subtitle}
          </h2>
        </div>
        <hr />
        {props.children}
      </div>
    </section>
  ) : (
    <section className="section">
      <div className="container">
        <div className="heading">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">
            {props.subtitle}
          </h2>
        </div>
        <hr />
        {props.children}
      </div>
    </section>
  );

  const highlight = props.highlight ? (
    <section className={`section ${styles.highlight}`}>
      <div className="container">
        <div className="heading">
          <h1 className={`title ${styles.titlehighlight}`}>{props.title}</h1>
          <h2 className={`subtitle ${styles.subTitleHigh}`}>
            {props.subtitle}
          </h2>
        </div>
        <hr />
        {props.children}
      </div>
    </section>
  ) : (
    <section className="section">
      <div className="container">
        <div className="heading">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">
            {props.subtitle}
          </h2>
        </div>
        <hr />
        {props.children}
      </div>
    </section>
  );
  return (
    <div>
      {props.highlight ? highlight : sectionBody}

    </div>
  );
}

Section.propTypes = {
  dark: React.PropTypes.bool,
  highlight: React.PropTypes.bool,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Section;
