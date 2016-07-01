import React from 'react';

import Logo from './logo.png';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick(evt) {
    evt.preventDefault();
    console.log(this.state.active);
    if (this.state.active) {
      this.state.active = false;
    } else if (this.state.active === false) {
      this.state.active = true;
    }
  }

  render() {
    const navColor = 'rgb(130, 183, 223)';
    const navMenu = this.state.active ? (
      <div>
        <span className="nav-toggle is-active" onClick={this.handleClick.bind(this)} >
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right nav-menu is-active">
          <a className="nav-item" href="/">
            Home
          </a>
          <a className="nav-item" href="http://portal.healthlx.com">
            Portal
          </a>

          <span className="nav-item">
            <a className="button is-primary" href="#">
              <span>Contact</span>
            </a>
          </span>

        </div>
      </div>
      ) : (
      <div>
        <span className="nav-toggle" onClick={this.handleClick.bind(this)} >
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right nav-menu">
          <a className="nav-item" href="/">
            Home
          </a>
          <a className="nav-item" href="http://portal.healthlx.com">
            Portal
          </a>

          <span className="nav-item">
            <a className="button is-primary" href="#">
              <span>Contact</span>
            </a>
          </span>

        </div>
      </div>
      );
    return (
      <nav className="nav" style={{ background: navColor }}>
        <div className="nav-left">
          <a className="nav-item" href="/">
            <img src={Logo} alt="HealthLX logo" />
          </a>
        </div>
        {navMenu}
      </nav>

    );
  }
}

Navigation.propTypes = {
  active: React.PropTypes.bool,
};
