import React from "react";
import { Link } from "react-router-dom";
import homePanelImage from "../../assets/images/home/home1.png";
import home2Image from "../../assets/images/home/home2.png";
import heroImage from "../../assets/images/home/heroSection.png";
import solarSavingsImage from "../../assets/images/home/solar1.png";
import solarCarbonImage from "../../assets/images/home/solar2.png";
import solarIndependenceImage from "../../assets/images/home/solar3.png";
import "./Home.css";

const heroCopy = {
  title: "Hi-tech solar power",
  description:
    "Local solar experts offering premium panels, hassle-free installation, and lifetime support. Get your free custom quote now.",
};

const statementCopy = {
  title: "We develop sustainable energy solutions",
  description:
    "Mebar Solar develops, finances, constructs, and operates sustainable energy assets. We accelerate the energy transition by scaling new technologies across the sustainable energy ecosystem. By delivering fit-for-purpose energy, we ensure our renewable solutions match each client's specific needs, scale, and operational rhythms.",
};

const solarBenefits = [
  {
    title: "Slash energy bills",
    description:
      "Generate your own electricity and lock in predictable energy costs for decades. Most customers save meaningfully every month.",
    image: solarSavingsImage,
    alt: "A glowing light bulb with a green plant growing inside",
  },
  {
    title: "Reduce carbon footprint",
    description:
      "A typical home solar system offsets tons of carbon pollution, helping your property run on cleaner power.",
    image: solarCarbonImage,
    alt: "A footprint shape made from green plants",
  },
  {
    title: "Energy independence",
    description:
      "Pair solar with smart planning to rely less on the grid and build a more resilient energy future.",
    image: solarIndependenceImage,
    alt: "A globe connected to a power outlet by a charging cable",
  },
  {
    title: "Increase home value",
    description:
      "Solar panels can improve long-term property appeal while giving buyers a more efficient energy setup.",
    image: solarSavingsImage,
    alt: "A glowing light bulb with a green plant growing inside",
  },
  {
    title: "Cleaner daily power",
    description:
      "Use sunlight for everyday loads and reduce dependence on fossil-fuel energy across your routine.",
    image: solarCarbonImage,
    alt: "A footprint shape made from green plants",
  },
];

const productHighlights = [
  "Eliminate electricity bills",
  "Low maintenance",
  "Reduced carbon footprint",
  "Battery storage integration",
  "Smart monitoring",
];

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <img
          className="home-hero-image"
          src={heroImage}
          alt="Solar panels under a bright blue sky"
        />

        <div className="home-hero-content page-shell">
          <div className="home-hero-layout">
            <h1 id="home-hero-title">{heroCopy.title}</h1>
            <div className="home-hero-aside">
              <p>{heroCopy.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-statement" aria-labelledby="home-statement-title">
        <div className="page-shell home-statement-inner">
          <h2 id="home-statement-title">{statementCopy.title}</h2>
          <p>{statementCopy.description}</p>
        </div>
      </section>

      <section className="home-image-band" aria-label="Solar panel texture">
        <img
          className="home-panel-image"
          src={homePanelImage}
          alt="Close-up of patterned solar panel cells"
        />
      </section>

      <section className="why-solar" aria-labelledby="why-solar-title">
        <div className="page-shell why-solar-inner">
          <h2 id="why-solar-title">Why solar?</h2>

          <div
            className="why-solar-scroller"
            aria-label="Solar benefits"
          >
            {solarBenefits.map((benefit) => (
              <article className="solar-benefit-card" key={benefit.title}>
                <img src={benefit.image} alt={benefit.alt} />
                <div className="solar-benefit-copy">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="why-solar-scroll-indicator" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="panel-products" aria-labelledby="panel-products-title">
        <div className="page-shell panel-products-grid">
          <div className="panel-products-intro">
            <p>Versatile solar panels for multiple applications</p>
            <a href="#panel-products-title">Discover our panels</a>
          </div>

          <div className="panel-products-main">
            <h2 id="panel-products-title">
              Our photovoltaic panels are designed to provide maximum
              performance in the smallest possible space.
            </h2>
            <p>
              Encom's innovative technology is based on a lamination process
              that encapsulates photovoltaic cells in a sandwich of high-strength
              plastic films. Thanks to this process, photovoltaic modules require
              no frame or support and are extremely thin, lightweight, and
              flexible.
            </p>
          </div>

          <div className="panel-products-count">
            <span aria-label={`${productHighlights.length} products`}>
              {productHighlights.length}
            </span>
            <h3>Products</h3>
          </div>

          <div className="panel-products-details">
            <ol>
              {productHighlights.map((highlight, index) => (
                <li key={highlight}>
                  <span>{String(index + 1).padStart(2, "0")}.</span>
                  {highlight}
                </li>
              ))}
            </ol>
            <p>
              Encom offers its customers a wide range of standard products that
              are easy to install and ready to use. For specific and complex
              needs, the customer is supported by the company's experts to design
              and implement custom solutions, both for the photovoltaic module
              and for any electronic and storage systems.
            </p>
          </div>

          <div className="panel-products-cta">
            <Link className="homeowner-card" to="/contact">
              <img
                src={home2Image}
                alt="Solar panels ready for residential installation"
              />
              <span>Homeowner</span>
              <span aria-hidden="true">-&gt;</span>
            </Link>

            <div className="business-card">
              <Link to="/contact">
                <span>Business Owner</span>
                <span aria-hidden="true" />
              </Link>
              <p>Find out more</p>
            </div>
          </div>

          <div className="panel-products-contact">
            <h2>For more product specifications</h2>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
