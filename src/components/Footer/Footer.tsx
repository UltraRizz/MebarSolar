import React from "react";
import { Link } from "react-router-dom";
import footerMap from "../../assets/images/Footer/map.png";
import ultraLogo from "../../assets/images/Footer/Ultra.png";
import "./Footer.css";

const footerGroups = [
  {
    title: "Solar Panels",
    links: [
      { label: "Homeowners", to: "/" },
      { label: "Business owners", to: "/" },
      { label: "All products", to: "/#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "FAQ", to: "/faq" },
      { label: "Blog", to: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", to: "/contact" },
      { label: "Get a quote", to: "/contact" },
      { label: "Installation", to: "/solutions" },
      { label: "Warranty", to: "/faq" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-shell">
        <div className="footer-top">
          <div className="footer-brand-block">
            <h2>Mebar Solar</h2>
            <p>Powering Bhutan with clean, reliable solar energy.</p>
            <address>
              <span>Thimphu, Bhutan</span>
              <a href="tel:+97517XXXXXX">+975 17 XXX XXXX</a>
              <a href="mailto:info@mebarsolar.bt">info@mebarsolar.bt</a>
            </address>
          </div>

          <div className="footer-link-groups">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3>{group.title}</h3>
                {group.links.map((link) => (
                  <Link key={link.label} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            ))}
          </div>

          <img
            className="footer-map"
            src={footerMap}
            alt="Map showing the service location in Bhutan"
          />
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Mebar Solar. All Rights Reserved.</p>

          <nav className="footer-social" aria-label="Social links">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
          </nav>

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
