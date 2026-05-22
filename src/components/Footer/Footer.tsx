import React from "react";
import { Link } from "react-router-dom";
import footerMap from "../../assets/images/Footer/Layer_1.svg";
import ultraLogo from "../../assets/images/Footer/Ultra.png";
import "./Footer.css";

const primaryLinks = [
  { label: "Solar Panels", to: "/" },
  { label: "Homeowners", to: "/" },
  { label: "Business owners", to: "/" },
  { label: "Products", to: "/" },
];

const secondaryLinks = [
  { label: "Contact us", to: "/contact" },
  { label: "About us", to: "/about" },
];

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-shell">
        <div className="footer-content">
          <div className="footer-brand">Solar panel</div>

          <address className="footer-address">
            <span>Thimphu, Bhutan</span>
            <a href="tel:+97517234556">+975 - 1723456</a>
          </address>

          <nav className="footer-nav" aria-label="Footer primary navigation">
            {primaryLinks.map((link) => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="footer-nav" aria-label="Footer secondary navigation">
            {secondaryLinks.map((link) => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <img
          className="footer-map"
          src={footerMap}
          alt="Map showing the service location in Bhutan"
        />

        <div className="footer-bottom">
          <p className="footer-social">
            Follow us on <a href="/">LinkedIn</a> + <a href="/">Facebook</a>
          </p>

          <p className="footer-copyright">
            &copy; 2026 Solar Panel. All Right Reserved.
          </p>

          <div className="footer-credit">
            <span>Developed by</span>
            <img src={ultraLogo} alt="Ultra" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
