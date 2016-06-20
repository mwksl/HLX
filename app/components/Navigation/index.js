import React from 'react';

/* import styles from './styles.css'; */

function Navigation() {
  return (
    <nav className="nav" style={{ backgroundColor: 'darkcyan' }}>
      <div className="nav-left">
        <a className="nav-item" href="#">
          <img src="/images/bulma.png" alt="HealthLX logo" style={{ color: 'white' }} />
        </a>
      </div>

      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu">
        <a className="nav-item" style={{ color: 'white' }} href="#">
          Home
        </a>
        <a className="nav-item" style={{ color: 'white' }} href="#">
          Portal
        </a>
        <a className="nav-item" style={{ color: 'white' }} href="#">
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

export default Navigation;
