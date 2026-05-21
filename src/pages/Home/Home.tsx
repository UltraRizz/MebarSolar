import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <>
      <section className="home-hero">
        <div className="page-shell home-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{siteConfig.home.eyebrow}</p>
            <h1>{siteConfig.home.heroTitle}</h1>
            <p>{siteConfig.home.heroText}</p>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                to={siteConfig.cta.primaryPath}
              >
                {siteConfig.cta.primaryLabel}
              </Link>
              <Link
                className="button button-secondary"
                to={siteConfig.cta.secondaryPath}
              >
                {siteConfig.cta.secondaryLabel}
              </Link>
            </div>
          </div>
          <div className="hero-panel" aria-label="Template preview">
            <div className="panel-sun" />
            <div className="panel-line panel-line-wide" />
            <div className="panel-line" />
            <div className="panel-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell feature-grid">
          {siteConfig.home.features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
