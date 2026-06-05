import React from "react";
import { Link } from "react-router-dom";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import productImage from "../../assets/product/product1.jpg";
import productThumbOne from "../../assets/images/home/section1.jpg";
import productThumbTwo from "../../assets/images/home/section2.jpg";
import productThumbThree from "../../assets/images/home/section3.jpg";
import "./ProductDetail.css";

const productSpecs = [
  ["Wattage", "550 W"],
  ["Efficiency", "21.8%"],
  ["Warranty", "25 years"],
  ["Best Use", "Residential & Commercial"],
];

const technicalSpecs = [
  ["Model", "Mebar Pro 550"],
  ["Max Power", "550 W"],
  ["Efficiency", "21.8%"],
  ["Dimensions", "2278 x 1134 x 35 mm"],
  ["Weight", "27.5 kg"],
  ["Cell Type", "Monocrystalline PERC"],
  ["Frame", "Anodized Aluminium"],
  ["Operating Temp", "-40C to +85C"],
  ["Warranty", "25-year performance"],
];

const keyFeatures = [
  {
    title: "High Efficiency",
    description: "21.8% conversion for maximum output.",
  },
  {
    title: "Durable Build",
    description: "Withstands snow, hail, and high winds.",
  },
  {
    title: "Low Degradation",
    description: "Strong performance for 25+ years.",
  },
  {
    title: "Easy Install",
    description: "Standard mounting, fast setup.",
  },
];

const thumbnails = [
  {
    src: productImage,
    alt: "Close aerial view of solar panel rows over green ground",
  },
  {
    src: productThumbOne,
    alt: "Solar panel rows reflecting bright daylight",
  },
  {
    src: productThumbTwo,
    alt: "Solar panels installed beside green grass",
  },
];

const ProductDetail: React.FC = () => {
  return (
    <div className="product-detail-page">
      <section className="product-detail-hero page-shell" aria-labelledby="product-detail-title">
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/product">Products</Link>
          <span>/</span>
          <span>Mebar Pro 550</span>
        </nav>

        <div className="product-detail-layout">
          <div className="product-detail-gallery">
            <figure className="product-detail-main-image">
              <img
                src={productThumbThree}
                alt="Large solar panels across a bright green field"
              />
              <figcaption>Scroll - Zoom HF01 / 300x</figcaption>
            </figure>

            <div className="product-detail-thumbnails" aria-label="Product image thumbnails">
              {thumbnails.map((thumb, index) => (
                <button
                  className={index === 0 ? "is-active" : undefined}
                  type="button"
                  key={thumb.alt}
                  aria-label={`View product image ${index + 1}`}
                >
                  <img src={thumb.src} alt={thumb.alt} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail-summary">
            <p className="section-kicker">Residential - High Efficiency</p>
            <h1 id="product-detail-title">Mebar Pro 550</h1>
            <p>
              A high-output monocrystalline panel built for Bhutan's climate,
              dependable performance, long service life, and real long-term
              savings.
            </p>

            <dl className="product-detail-spec-list">
              {productSpecs.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="product-detail-actions">
              <AnimatedButton to="/contact" theme="dark">
                Learn more
              </AnimatedButton>
              <AnimatedButton to="/contact">Order now</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-specs-band">
        <div className="page-shell product-detail-specs">
          <p className="section-kicker">Details</p>
          <h2>Technical Specifications</h2>

          <dl>
            {technicalSpecs.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="product-detail-features" aria-labelledby="product-detail-features-title">
        <div className="page-shell product-detail-features-inner">
          <div className="product-detail-features-heading">
            <p className="section-kicker">Why this panel</p>
            <h2 id="product-detail-features-title">Key Features</h2>
          </div>

          <div className="product-detail-feature-grid">
            {keyFeatures.map((feature) => (
              <article className="product-detail-feature-card" key={feature.title}>
                <span aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-detail-support-band" aria-label="Installation and warranty">
        <div className="page-shell product-detail-support-grid">
          <article>
            <h2>Installation Guide</h2>
            <p>
              Our certified team handles mounting, wiring, inverter setup, and
              full system testing. A typical residential install takes 2-4 days.
            </p>
          </article>

          <article>
            <h2>Warranty Information</h2>
            <p>
              Backed by a 25-year performance warranty and workmanship coverage
              on installation, for complete peace of mind.
            </p>
          </article>
        </div>
      </section>

      <section className="product-detail-order-cta" aria-label="Order Mebar Pro 550">
        <div className="page-shell product-detail-order-cta-inner">
          <h2>Ready to order the Mebar Pro 550?</h2>
          <AnimatedButton to="/contact">Get a quote</AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
