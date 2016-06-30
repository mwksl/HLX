import React from 'react';

import Logo from './logo.png';

function Navigation() {
  const isActive = 'is-active';
  const navColor = 'rgb(130, 183, 223)';
  return (
    <nav className="nav" style={{ background: navColor }}>
      <div className="nav-left">
        <a className="nav-item" href="/">
          <img src={Logo} alt="HealthLX logo" />
        </a>
      </div>

      <span className={`nav-toggle ${isActive}`} onClick={isActive}>
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className={`nav-right nav-menu ${isActive}`}>
        <a className="nav-item" style={{ color: 'white' }} href="/">
          Home
        </a>
        <a className="nav-item" style={{ color: 'white' }} href="http://portal.healthlx.com">
          Portal
        </a>
        <a className="nav-item" style={{ color: 'white' }} href="/blog">
          Blog
        </a>

        <span className="nav-item">
          <a className="button is-primary" href="#">
            <span>Contact</span>
          </a>
        </span>
      </div>
    </nav>

  );
}

Navigation.propTypes = {
  active: React.PropTypes.string,
};

export default Navigation;
