import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { defaultProduct } from "../../data";
import "./ProductDetail.css";

const ProductDetail: React.FC = () => {
  const product = defaultProduct;

  return (
    <div className="product-detail-page">
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
              <Link className="detail-action detail-action-dark" to="/contact">
                <span>Learn more</span>
                <span aria-hidden="true">+</span>
              </Link>
              <Link className="detail-action detail-action-orange" to="/contact">
                <span>Order now</span>
                <span aria-hidden="true">+</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-specs-band">
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
          <Link to="/contact">
            <span>Get a quote</span>
            <span aria-hidden="true">+</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
