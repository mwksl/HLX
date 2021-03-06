import React from 'react';

import Header from './header.jpg';

/* Hero Banner
 * A large vertically-centered full-page-width section for highlighting
 * information
 *
 * @topText - Top subdued text
 * @centerHighlight - Center main text
 * @subtitle - Small texts directly below main text
 * @bottomText - Bottom subdued text
 *
 */

function Banner(props) {
  const bannerBody = props.linkLocation ? (
    <div className="hero-body">
      <div className="container has-text-centered">
        <h3 className="title is-2">
          <a href={`${props.linkLocation}`}>
          {props.centerHighlight}
          </a>
        </h3>
        <h4 className="subtitle is-4">{props.subtitle}</h4>
      </div>
    </div>
  ) : (
    <div className="hero-body">
      <div className="container has-text-centered">
        <h3 className="title is-2">
          {props.centerHighlight}
        </h3>
        <h4 className="subtitle is-4">{props.subtitle}</h4>
      </div>
    </div>
  );
  return (
    <section
      className="hero is-medium is-primary is-bold"
      style={{ backgroundImage: `url(${Header})` }}
    >
      <div className="hero-head">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>{props.topText}</li>
            </ul>
          </div>
        </div>
      </div>

      {bannerBody}

      <div className="hero-foot">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>{props.bottomText}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Banner.propTypes = {
  topText: React.PropTypes.any,
  centerHighlight: React.PropTypes.any,
  linkLocation: React.PropTypes.string,
  subtitle: React.PropTypes.any,
  bottomText: React.PropTypes.any,
};

export default Banner;
