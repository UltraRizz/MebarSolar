import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div>
          <h2>{siteConfig.brand.name}</h2>
          <p>{siteConfig.brand.tagline}</p>
        </div>
        <div className="footer-links">
          {siteConfig.routes.map((route) => (
            <Link key={route.path} to={route.path}>
              {route.label}
            </Link>
          ))}
        </div>
        <p className="footer-meta">
          {siteConfig.contact.email} · {siteConfig.contact.phone}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
