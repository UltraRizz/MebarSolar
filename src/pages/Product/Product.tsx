import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import productImage from "../../assets/product/product1.jpg";
import "./Product.css";

const panelTypes = ["HF45", "HF82", "HF100", "HF145", "HF165"];

const keyElements = [
  { icon: "W", label: "Peak power Pmax (Wp)", value: "45W" },
  { icon: "1.7", label: "Ultra thin", value: "1.7mm" },
  { icon: "kg", label: "Super light", value: "0.8kg" },
  { icon: "m2", label: "Minimum footprint", value: "0.32m2" },
];

const specifications = [
  ["Tolerance (%)", "up to 5% only positive"],
  ["Open circuit voltage, Voc (V)", "20.2"],
  ["Short circuit current, Isc (A)", "2.9"],
  ["Voltage at Pmax, Vmp (V)", "17"],
  ["Current at Pmax, Imp (A)", "2.7"],
  ["Temp. coefficient of Isc, a (%/C)", "0.05"],
  ["Temperature coefficient of Voc, b (%/C)", "-0.31"],
  ["Temperature coefficient Pmax (%/C)", "-0.41"],
  ["Fill Factor (FF) (%)", "78.4"],
  ["Operating temperature (C)", "from -40 to +80"],
  ["NOCT (C)", "47.5"],
  ["Module material", "UVA-resistant Plastic Polymer"],
  ["Dimensions (wxh) (m)", "0.536 x 0.604"],
  ["Thickness (mm)", "1.7"],
  ["Weight (kg)", "0.8"],
  ["Maximum system voltage (V)", "600"],
  ["Photovoltaic cells", "n. 18 mono Si 25x125 2BB cut 1/2"],
  ["Output terminals", "1m Cables with MC4 connectors"],
  ["Bypass diode (A)", "1 inside JB, 12A"],
];

const applications = [
  "Nautical",
  "Caravanning",
  "Agrivoltaics",
  "Off-grid",
  "Telecom towers",
  "Rural infrastructure",
];

const Product: React.FC = () => {
  return (
    <div className="product-page">
      <section className="product-showcase page-shell" aria-labelledby="product-title">
        <div className="product-panel-header">
          <p>Panel types</p>
          <div className="product-panel-strip" aria-label="Panel types">
            {panelTypes.map((panel, index) => (
              <span
                className={index === 0 ? "is-active" : undefined}
                key={panel}
                aria-current={index === 0 ? "true" : undefined}
              >
                {panel}
              </span>
            ))}
          </div>

          <div className="product-arrows" aria-hidden="true">
            <span>&larr;</span>
            <span>&rarr;</span>
          </div>
        </div>

        <div className="product-feature">
          <aside className="product-brief">
            <p>Description</p>
            <strong>Up to 320 W and available in stripe format</strong>
            <a href="#product-description">
              <span>Learn more</span>
              <span aria-hidden="true">&darr;</span>
            </a>
          </aside>

          <figure className="product-hero-image">
            <Link to="/product-detail" aria-label="View Mebar Pro 550 product detail">
              <img
                src={productImage}
                alt="Aerial view of solar panel rows installed over green ground"
              />
            </Link>
          </figure>
        </div>
      </section>

      <section
        className="product-description page-shell"
        id="product-description"
        aria-labelledby="product-title"
      >
        <div className="product-description-title">
          <h1 id="product-title">Description</h1>

          <div className="product-sheet" aria-label="Technical data sheet">
            <span className="product-sheet-icon">PDF</span>
            <span>
              <small>Technical data sheet IT/EN</small>
              <strong>HF45</strong>
            </span>
          </div>
        </div>

        <div className="product-description-copy">
          <p>
            This model is versatile, slim, compact and capable of preventing the
            risks of adverse weather conditions and wear and tear by being
            waterproof and rustproof.
          </p>
          <a href="#technical-specifications" aria-label="View technical specifications">
            &darr;
          </a>
        </div>
      </section>

      <section
        className="product-details page-shell"
        id="technical-specifications"
        aria-labelledby="technical-specifications-title"
      >
        <div className="product-key-elements">
          <h2>Key elements</h2>
          <div className="product-key-grid">
            {keyElements.map((item) => (
              <article className="product-key-item" key={item.label}>
                <span className="product-key-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="product-specifications">
          <h2 id="technical-specifications-title">Technical specifications</h2>
          <dl>
            {specifications.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="product-applications">
          <h2>Applications</h2>
          <ul>
            {applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="product-footer-cta" aria-label="More product specifications">
        <div className="page-shell product-footer-cta-inner">
          <h2>For more product specifications</h2>
          <Link to="/contact">Contact us</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
