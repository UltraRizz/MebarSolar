import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import ProductTypeScroller from "../../components/ProductTypeScroller/ProductTypeScroller";
import useScrollReveal from "../../hooks/useScrollReveal";
import { defaultProduct, products } from "../../data";
import "./Product.css";

const Product: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct);

  useScrollReveal(pageRef, [
    ".product-panel-header",
    ".product-panel-strip",
    ".product-arrows",
    ".product-brief",
    ".product-hero-image",
    ".product-description-title",
    ".product-description-copy",
    ".product-key-elements h2",
    ".product-key-item",
    ".product-specifications h2",
    ".product-specifications dl div",
    ".product-applications h2",
    ".product-applications li",
    ".product-footer-cta h2",
    ".product-footer-cta .mab-button",
  ]);

  return (
    <div ref={pageRef} className="product-page">
      <section className="product-showcase page-shell" aria-labelledby="product-title">
        <ProductTypeScroller
          products={products}
          activeProductCode={selectedProduct.code}
          onProductChange={setSelectedProduct}
        />

        <div className="product-feature">
          <aside className="product-brief">
            <p>Description</p>
            <strong>{selectedProduct.shortDescription}</strong>
            <a href="#product-description">
              <span>Learn more</span>
              <span aria-hidden="true">&darr;</span>
            </a>
          </aside>

          <figure className="product-hero-image">
            <Link to="/product-detail" aria-label={`View ${selectedProduct.name} product detail`}>
              <img
                src={selectedProduct.showcaseImage.src}
                alt={selectedProduct.showcaseImage.alt}
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
              <small>{selectedProduct.datasheetLabel}</small>
              <strong>{selectedProduct.code}</strong>
            </span>
          </div>
        </div>

        <div className="product-description-copy">
          <p>{selectedProduct.description}</p>
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
            {selectedProduct.keyElements.map((item) => (
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
            {selectedProduct.specifications.map(([label, value]) => (
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
            {selectedProduct.applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="product-footer-cta" aria-label="More product specifications">
        <div className="page-shell product-footer-cta-inner">
          <h2>For more product specifications</h2>
          <AnimatedButton to="/contact">Contact us</AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
