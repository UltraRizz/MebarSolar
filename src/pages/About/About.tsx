import React from "react";
import { siteConfig } from "../../config/site";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="section page-shell simple-page">
      <p className="eyebrow">{siteConfig.brand.name}</p>
      <h1>{siteConfig.about.title}</h1>
      <p>{siteConfig.about.body}</p>
    </section>
  );
};

export default About;
