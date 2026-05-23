import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import aboutImage from "../../assets/images/about/section.png";
import "./About.css";

const valueCards = [
  {
    title: "Our Mission",
    description:
      "To provide reliable and accessible solar energy solutions across Bhutan.",
  },
  {
    title: "Our Vision",
    description:
      "To become a trusted renewable-energy company creating long-term, clean, independent power.",
  },
];

const energyBenefits = [
  {
    title: "Clean Energy",
    description: "Zero-emission power that protects Bhutan's pristine environment.",
  },
  {
    title: "Energy Independence",
    description: "Reduce reliance on imported and grid power.",
  },
  {
    title: "Long-Term Savings",
    description: "Lower energy costs for decades after installation.",
  },
  {
    title: "Sustainability",
    description: "Supporting a greener future for the next generation.",
  },
];

const teamMembers = [
  { name: "Founder", role: "Founder & CEO" },
  { name: "Lead Engineer", role: "Solar Systems Engineer" },
  { name: "Install Team", role: "Certified Installers" },
  { name: "Support Team", role: "Customer Support" },
];

const certifications = [
  "ISO Quality",
  "Safety Standard",
  "IEC Compliance",
  "Warranty Assured",
];

const processSteps = [
  {
    title: "1. Sourcing",
    description: "Panels sourced from vetted, high-quality manufacturers.",
  },
  {
    title: "2. Quality Testing",
    description: "Each batch is inspected for performance and durability.",
  },
  {
    title: "3. Installation",
    description: "Certified engineers install and verify every system.",
  },
  {
    title: "4. Support",
    description: "Ongoing maintenance and long-term warranty support.",
  },
];

const sustainabilityGoals = [
  {
    title: "Reduce Carbon Emissions",
    description: "Cutting reliance on fossil and imported power.",
  },
  {
    title: "Increase Clean Energy",
    description: "Expanding solar adoption across Bhutan.",
  },
  {
    title: "Support Communities",
    description: "Bringing energy access to remote regions.",
  },
  {
    title: "Renewable Education",
    description: "Promoting awareness of solar benefits.",
  },
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero" aria-labelledby="about-hero-title">
        <img
          className="about-hero-image"
          src={aboutImage}
          alt="Solar panels below a clear blue sky"
        />
        <div className="about-hero-shade" aria-hidden="true" />

        <div className="page-shell about-hero-content">
          <p className="section-kicker">About Mebar Solar</p>
          <h1 id="about-hero-title">About Mebar Solar</h1>
          <p>Powering Bhutan with clean, reliable, and accessible solar energy.</p>
        </div>
      </section>

      <section className="about-story page-shell" aria-labelledby="about-story-title">
        <div className="about-story-copy">
          <p className="section-kicker">Our story</p>
          <h2 id="about-story-title">
            Supporting Bhutan's Transition to Renewable Energy
          </h2>
          <p>
            Mebar Solar was founded to make clean, dependable solar power
            accessible across Bhutan. We guide every customer from first
            consultation through installation and long-term support, bringing
            reliable energy to homes, businesses, and institutions in even the
            most remote valleys.
          </p>
        </div>

        <figure className="about-story-figure">
          <img src={aboutImage} alt="Solar panels installed in Bhutan" />
        </figure>
      </section>

      <section className="about-values-band">
        <div className="about-values page-shell">
          <p className="section-kicker">What drives us</p>
          <h2>Mission &amp; Vision</h2>

          <div className="about-card-grid about-card-grid-two">
            {valueCards.map((card) => (
              <article className="about-card" key={card.title}>
                <span aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-benefits page-shell">
        <p className="section-kicker">Why it matters</p>
        <h2>Why Renewable Energy Matters</h2>

        <div className="about-card-grid about-card-grid-four">
          {energyBenefits.map((benefit) => (
            <article className="about-card" key={benefit.title}>
              <span aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-team-band">
        <div className="about-team page-shell">
          <p className="section-kicker">Our people</p>
          <h2>Founder &amp; Team</h2>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <span aria-hidden="true" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-certifications page-shell">
        <p className="section-kicker">Trust &amp; Compliance</p>
        <h2>Certifications &amp; Partnerships</h2>

        <div className="certification-list" aria-label="Certifications">
          {certifications.map((certification) => (
            <span key={certification}>{certification}</span>
          ))}
        </div>

        <div className="partner-grid" aria-label="Partner logos">
          <span>Partner Logo</span>
          <span>Partner Logo</span>
          <span>Partner Logo</span>
          <span>Partner Logo</span>
        </div>
      </section>

      <section className="about-process-band">
        <div className="about-process page-shell">
          <p className="section-kicker">Our process</p>
          <h2>Supply &amp; Quality Assurance</h2>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="about-card" key={step.title}>
                <span aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-sustainability page-shell">
        <p className="section-kicker">Our commitment</p>
        <h2>Sustainability Goals</h2>

        <div className="about-card-grid about-card-grid-four">
          {sustainabilityGoals.map((goal) => (
            <article className="about-card" key={goal.title}>
              <span aria-hidden="true" />
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta" aria-label="Get a quote">
        <div className="page-shell about-cta-inner">
          <h2>Ready to power your home or business with solar?</h2>
          <Link className="split-button split-button-orange" to="/contact">
            <span>Get a quote</span>
            <span aria-hidden="true">+</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
