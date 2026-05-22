import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <header className="site-nav">
      <div className="page-shell nav-inner">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true" />
          <span>Solar panel</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Menu"
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="menu-label">Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Nav;
