import React, { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";
import { defaultProduct } from "../../data";
import "./ProductDetail.css";

const ProductDetail: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const product = defaultProduct;

  useScrollReveal(pageRef, [
    ".product-breadcrumb",
    ".product-detail-gallery",
    ".product-detail-summary",
    ".product-detail-specs .section-kicker",
    ".product-detail-specs h2",
    ".product-detail-specs dl div",
    ".product-detail-features-heading",
    ".product-detail-feature-card",
    ".product-detail-support-grid article",
    ".product-detail-order-cta h2",
    ".product-detail-order-cta .mab-button",
  ]);

  return (
    <div ref={pageRef} className="product-detail-page">
      <section className="product-detail-hero page-shell" aria-labelledby="product-detail-title">
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/product">Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-layout">
          <div className="product-detail-gallery">
            <figure className="product-detail-main-image">
              <img
                src={product.detailHeroImage.src}
                alt={product.detailHeroImage.alt}
              />
              <figcaption>Scroll - Zoom {product.code} / 300x</figcaption>
            </figure>

            <div className="product-detail-thumbnails" aria-label="Product image thumbnails">
              {product.thumbnails.map((thumb, index) => (
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
            <p className="section-kicker">{product.category}</p>
            <h1 id="product-detail-title">{product.name}</h1>
            <p>{product.description}</p>

            <dl className="product-detail-spec-list">
              {product.summarySpecs.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <div className="product-detail-actions">
              <AnimatedButton href="#technical-specifications" theme="dark">
                View specs
              </AnimatedButton>
              <AnimatedButton to="/contact">Order now</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-specs-band" id="technical-specifications">
        <div className="page-shell product-detail-specs">
          <p className="section-kicker">Details</p>
          <h2>Technical Specifications</h2>

          <dl>
            {product.technicalSpecs.map(([label, value]) => (
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
            {product.features.map((feature) => (
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
            <p>{product.installationGuide}</p>
          </article>

          <article>
            <h2>Warranty Information</h2>
            <p>{product.warrantyInfo}</p>
          </article>
        </div>
      </section>

      <section className="product-detail-order-cta" aria-label={`Order ${product.name}`}>
        <div className="page-shell product-detail-order-cta-inner">
          <h2>Ready to order the {product.name}?</h2>
          <AnimatedButton to="/contact">Get a quote</AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
