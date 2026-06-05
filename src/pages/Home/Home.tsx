import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import heroImage from "../../assets/images/home/homeHero.png";
import productImage from "../../assets/images/home/section1.png";
import productCardOneImage from "../../assets/images/home/section1.jpg";
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
    image: productCardOneImage,
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

const Home: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroLineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const image = heroImageRef.current;
    const content = heroContentRef.current;
    const line = heroLineRef.current;

    if (!hero || !image || !content || !line) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          content,
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.9 },
          0,
        )
        .fromTo(
          image,
          { autoAlpha: 0, y: 34, rotation: -11, scale: 0.94 },
          { autoAlpha: 1, y: 0, rotation: -7, scale: 1, duration: 1.05 },
          0.08,
        )
        .fromTo(
          line,
          { scaleX: 0, autoAlpha: 0 },
          { scaleX: 1, autoAlpha: 1, duration: 0.8 },
          0.35,
        );

      gsap.to(image, {
        y: -16,
        rotation: -5.6,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.05,
      });
    }, hero);

    return () => context.revert();
  }, []);

  return (
    <div className="home-page">
      <section
        ref={heroRef}
        className="home-hero"
        aria-labelledby="home-hero-title"
      >
        <div className="home-hero-stage">
          <img
            ref={heroImageRef}
            className="home-hero-image"
            src={heroImage}
            alt="High-efficiency solar panel module"
          />

          <div ref={heroContentRef} className="page-shell home-hero-content">
            <div className="home-hero-title-block">
              <p className="section-kicker">Clean solar energy for Bhutan</p>
              <h1 id="home-hero-title">
                Hi-tech
                <br />
                solar power
              </h1>
            </div>

            <div className="home-hero-info">
              <p>
                Photovoltaic panels for homes, businesses, and custom clean
                energy projects across Bhutan.
              </p>

              <div className="hero-actions" aria-label="Primary actions">
                <AnimatedButton to="/contact">Order now</AnimatedButton>
              </div>
            </div>
          </div>

          <span ref={heroLineRef} className="home-hero-line" aria-hidden="true" />
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
          <AnimatedButton to="/contact">Request a quote</AnimatedButton>
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

            <AnimatedButton to="/about" theme="dark">
              Read more
            </AnimatedButton>
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
          <Link className="products-explore" to="/product">
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
                  <AnimatedButton to="/product-detail" theme="dark" className="product-card-button">
                    View details
                  </AnimatedButton>
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

            <AnimatedButton className="inquiry-submit" type="button">
              Send inquiry
            </AnimatedButton>
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
