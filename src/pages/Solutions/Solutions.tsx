import React from "react";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import heroImage from "../../assets/images/about/section.png";
import "./Solutions.css";

const solutions = [
  {
    title: "Residential Solar Installation",
    description:
      "Custom rooftop systems that cut home energy bills and add long-term value.",
  },
  {
    title: "Business / Commercial Solar",
    description:
      "Scalable arrays that lower operating costs for shops, offices, and factories.",
  },
  {
    title: "Institutional Projects",
    description:
      "Solar for schools, hospitals, monasteries, and government facilities.",
  },
  {
    title: "Off-Grid Solar Solutions",
    description:
      "Reliable independent power for remote homes and communities.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Inspection, cleaning, monitoring, and repair to keep systems performing.",
  },
  {
    title: "Solar Consultation",
    description:
      "Expert site assessment and system sizing tailored to your needs.",
  },
];

const Solutions: React.FC = () => {
  return (
    <div className="solutions-page">
      <section className="solutions-hero" aria-labelledby="solutions-hero-title">
        <img
          className="solutions-hero-image"
          src={heroImage}
          alt="Solar panels below a clear blue sky"
        />
        <div className="solutions-hero-shade" aria-hidden="true" />

        <div className="page-shell solutions-hero-content">
          <p className="section-kicker">What we do</p>
          <h1 id="solutions-hero-title">Solar Solutions for Every Need</h1>
          <p>
            End-to-end solar services, from consultation and design to
            installation and ongoing support.
          </p>
        </div>
      </section>

      <section className="solutions-list page-shell" aria-label="Solar solutions">
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <span className="solution-card-icon" aria-hidden="true" />
              <h2>{solution.title}</h2>
              <p>{solution.description}</p>
              <AnimatedButton to="/contact" theme="dark" className="solution-card-button">
                Learn More
              </AnimatedButton>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
