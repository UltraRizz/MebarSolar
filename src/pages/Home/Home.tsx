import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import heroImage from "../../assets/images/home/hero.jpg";
import productImage from "../../assets/images/home/section1.jpg";
import trustImage from "../../assets/images/home/section2.jpg";
import productCardImage from "../../assets/images/home/section3.jpg";
import "./Home.css";

const stats = [
  { value: "250+", label: "Installations" },
  { value: "1.5 MW", label: "Capacity installed" },
  { value: "12", label: "Districts served" },
  { value: "25 Years", label: "Panel warranty" },
];

const trustPoints = [
  {
    eyebrow: "Our mission",
    text: "Reliable, accessible solar across Bhutan.",
  },
  {
    eyebrow: "Our vision",
    text: "A cleaner, energy-independent Bhutan.",
  },
];

const products = [
  {
    name: "Mebar Home 400",
    image: productImage,
    alt: "Solar panel rows reflecting bright daylight",
    specs: [
      ["Wattage", "400W"],
      ["Efficiency", "21.3%"],
      ["Warranty", "25 yrs"],
      ["Application", "Residential"],
    ],
  },
  {
    name: "Mebar Pro 550",
    image: trustImage,
    alt: "Aerial view of solar panels on green ground",
    specs: [
      ["Wattage", "550W"],
      ["Efficiency", "22.1%"],
      ["Warranty", "25 yrs"],
      ["Application", "Commercial"],
    ],
  },
  {
    name: "Mebar Max 660",
    image: productCardImage,
    alt: "Solar panels in a field below a cloudy sky",
    specs: [
      ["Wattage", "660W"],
      ["Efficiency", "23.4%"],
      ["Warranty", "30 yrs"],
      ["Application", "Utility"],
    ],
  },
];

const reliabilityFeatures = [
  {
    title: "Designed for Bhutan's Climate",
    description:
      "Built to perform in high-altitude sun and cold mountain conditions.",
  },
  {
    title: "Reliable Installation Support",
    description: "Certified engineers handle setup, testing, and handover.",
  },
  {
    title: "Long-Term Warranty",
    description: "Up to 25-year performance coverage for peace of mind.",
  },
  {
    title: "Clean Renewable Energy",
    description: "Reduce emissions and support a sustainable Bhutan.",
  },
  {
    title: "Lower Electricity Costs",
    description: "Cut monthly bills and lock in long-term savings.",
  },
  {
    title: "Residential & Commercial",
    description: "Solutions scaled for homes, businesses, and institutions.",
  },
];

const SplitButton = ({
  children,
  to,
  tone = "orange",
}: {
  children: React.ReactNode;
  to: string;
  tone?: "orange" | "dark";
}) => (
  <Link className={`split-button split-button-${tone}`} to={to}>
    <span>{children}</span>
    <span aria-hidden="true">+</span>
  </Link>
);

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <img
          className="home-hero-image"
          src={heroImage}
          alt="Solar panels stretching across a green field below a cloudy sky"
        />
        <div className="home-hero-shade" aria-hidden="true" />

        <div className="page-shell home-hero-content">
          <p className="section-kicker">Clean solar energy for Bhutan</p>
          <h1 id="home-hero-title">
            Powering Bhutan With Clean Solar Energy
          </h1>
          <p>
            Reliable solar panel solutions for homes, businesses, and
            sustainable energy projects across Bhutan.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <SplitButton to="/contact">Order now</SplitButton>
            <SplitButton to="/about" tone="dark">
              Learn more
            </SplitButton>
          </div>
        </div>
      </section>

      <section className="home-stats page-shell" aria-label="Company metrics">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section
        className="home-product page-shell"
        id="product"
        aria-labelledby="home-product-title"
      >
        <div className="home-product-copy">
          <p className="section-kicker">The product</p>
          <h2 id="home-product-title">
            High-Efficiency Solar Panels Built for Bhutan
          </h2>
          <p>
            Engineered for high-altitude sun and cold mountain climates, our
            panels deliver dependable output, long service life, and real
            long-term savings across every energy need.
          </p>
          <SplitButton to="/contact">Request a quote</SplitButton>
        </div>

        <figure className="product-figure">
          <img src={productImage} alt="Rows of solar panels in bright sun" />
          <figcaption>Drag to rotate. Scroll to zoom.</figcaption>
        </figure>
      </section>

      <section className="home-trust-band">
        <div
          className="home-trust page-shell"
          id="solutions"
          aria-labelledby="home-trust-title"
        >
          <figure className="trust-figure">
            <img src={trustImage} alt="Solar panel field beside green grass" />
            <figcaption>Factory / Installation photo</figcaption>
          </figure>

          <div className="home-trust-copy">
            <p className="section-kicker">Who we are</p>
            <h2 id="home-trust-title">
              Bhutan's Trusted Partner in Clean Solar Energy
            </h2>
            <p>
              Mebar Solar helps homes, businesses, and institutions access
              Bhutan power through dependable solar power. From consultation to
              installation and long-term support, we make clean energy simple,
              accessible, and lasting.
            </p>

            <div className="trust-points">
              {trustPoints.map((point) => (
                <article key={point.eyebrow}>
                  <span>{point.eyebrow}</span>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>

            <SplitButton to="/about" tone="dark">
              Read more
            </SplitButton>
          </div>
        </div>
      </section>

      <section
        className="home-products page-shell"
        id="products"
        aria-labelledby="home-products-title"
      >
        <div className="home-products-header">
          <div>
            <p className="section-kicker">Our products</p>
            <h2 id="home-products-title">Solar Panels for Every Need</h2>
          </div>
          <Link className="products-explore" to="/contact">
            Explore
          </Link>
        </div>

        <div className="product-card-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <figure className="product-card-media">
                <img src={product.image} alt={product.alt} />
                <figcaption>3D Solar Panel</figcaption>
              </figure>

              <div className="product-card-body">
                <h3>{product.name}</h3>
                <dl>
                  {product.specs.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="product-card-actions">
                  <SplitButton to="/contact" tone="dark">
                    Learn more
                  </SplitButton>
                  <Link className="product-view-link" to="/contact">
                    View
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-reliability-band">
        <div className="home-reliability page-shell">
          <p className="section-kicker">Why Mebar Solar</p>
          <h2>Built for Reliability, Savings, and Bhutan</h2>

          <div className="reliability-grid">
            {reliabilityFeatures.map((feature) => (
              <article className="reliability-card" key={feature.title}>
                <span aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-inquiry page-shell"
        aria-labelledby="home-inquiry-title"
      >
        <div className="inquiry-heading">
          <p className="section-kicker">Get in touch</p>
          <h2 id="home-inquiry-title">Send Us Your Inquiry</h2>
          <p>
            Ready to switch to clean solar energy? Send us your inquiry and our
            team will contact you.
          </p>
        </div>

        <div className="inquiry-layout">
          <form className="inquiry-form">
            <div className="form-grid">
              <label>
                <span>Full Name</span>
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                <span>Phone Number</span>
                <input type="tel" placeholder="+975 ..." />
              </label>
              <label>
                <span>Email Address</span>
                <input type="email" placeholder="you@email.com" />
              </label>
              <label>
                <span>Location</span>
                <input type="text" placeholder="Dzongkhag / Town" />
              </label>
              <label>
                <span>Customer Type</span>
                <input type="text" placeholder="Homeowner / Business / Institution" />
              </label>
              <label>
                <span>Interested Product / Service</span>
                <input type="text" placeholder="e.g. Residential panels" />
              </label>
              <label className="form-message">
                <span>Message</span>
                <textarea placeholder="Tell us about your project" />
              </label>
            </div>

            <button
              className="split-button split-button-orange inquiry-submit"
              type="button"
            >
              <span>Send inquiry</span>
              <span aria-hidden="true">+</span>
            </button>
          </form>

          <aside className="inquiry-contact-card" aria-label="Contact details">
            <dl>
              <div>
                <dt>Phone</dt>
                <dd>+975 17 XXX XXXX</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>info@mebarsolar.bt</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>Thimphu, Bhutan</dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Mon-Sat, 9:00-17:00</dd>
              </div>
              <div>
                <dt>Social</dt>
                <dd>Facebook · Instagram · LinkedIn</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
