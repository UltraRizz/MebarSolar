import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/images/home/Logo.png";
import "./Nav.css";

const menuLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/product" },
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-nav">
        <div className="page-shell nav-inner">
          <Link className="brand" to="/" aria-label="Mebar Solar home">
            <img src={logoImage} alt="Mebar Solar" />
          </Link>

          <button
            className="menu-button"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
            <span>Menu</span>
          </button>
        </div>
      </header>

      <div className={`menu-overlay${menuOpen ? " is-open" : ""}`}>
        <section className="menu-panel menu-panel-dark" aria-label="Menu brand">
          <button
            className="menu-close"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <span aria-hidden="true">x</span>
            <span>Close</span>
          </button>

          <div className="menu-brand-block">
            <img src={logoImage} alt="Mebar Solar" />
            <h2>Mebar Solar</h2>
            <p>
              Powering Bhutan with clean, reliable solar energy. Explore our
              products, projects, and services.
            </p>
          </div>
        </section>

        <section className="menu-panel menu-panel-light" aria-label="Main menu">
          <p>What do you want to explore?</p>
          <nav className="menu-links">
            {menuLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </section>
      </div>
    </>
  );
};

export default Nav;
