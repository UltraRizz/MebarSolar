import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../../config/site";
import "./Nav.css";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-nav">
      <div className="page-shell nav-inner">
        <NavLink className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true" />
          <span>{siteConfig.brand.name}</span>
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {siteConfig.routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
