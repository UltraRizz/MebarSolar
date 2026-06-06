import React, { useRef } from "react";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";
import aboutImage from "../../assets/images/about/section.png";
import "./Contact.css";

const contactMethods = [
  {
    label: "Phone",
    value: "+975 17 XXX XXXX",
    href: "tel:+97517XXXXXX",
  },
  {
    label: "Email",
    value: "info@mebarsolar.bt",
    href: "mailto:info@mebarsolar.bt",
  },
  {
    label: "Location",
    value: "Thimphu, Bhutan",
  },
  {
    label: "Business Hours",
    value: "Mon-Sat: 9:00-17:00",
  },
  {
    label: "Social",
    value: "Facebook / Instagram / LinkedIn",
  },
];

const inquiryTypes = [
  "Product",
  "Installation",
  "Maintenance",
  "Partnership",
];

const Contact: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useScrollReveal(pageRef, [
    ".contact-form-panel",
    ".contact-form label",
    ".contact-submit",
    ".contact-info-card",
    ".contact-location .section-kicker",
    ".contact-location h2",
    ".contact-map-placeholder",
  ]);

  return (
    <div ref={pageRef} className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <img
          className="contact-hero-image"
          src={aboutImage}
          alt="Solar panels below a clear blue sky"
        />
        <div className="contact-hero-shade" aria-hidden="true" />

        <div className="page-shell contact-hero-content">
          <p className="section-kicker">Get in touch</p>
          <h1 id="contact-hero-title">Contact &amp; Order</h1>
          <p>
            Send your inquiry and our team will get back to you with a tailored
            solar solution.
          </p>
        </div>
      </section>

      <section className="contact-order page-shell" aria-labelledby="contact-form-title">
        <div className="contact-form-panel">
          <form className="contact-form">
            <div className="contact-form-grid">
              <label>
                <span>Full Name</span>
                <input name="fullName" type="text" placeholder="Your name" />
              </label>

              <label>
                <span>Phone Number</span>
                <input name="phone" type="tel" placeholder="+975..." />
              </label>

              <label>
                <span>Email Address</span>
                <input name="email" type="email" placeholder="you@email.com" />
              </label>

              <label>
                <span>Location</span>
                <input name="location" type="text" placeholder="Dzongkhag / Town" />
              </label>

              <label>
                <span>Customer Type</span>
                <select name="customerType" defaultValue="">
                  <option value="" disabled>
                    Homeowner / Business / Institution
                  </option>
                  <option value="homeowner">Homeowner</option>
                  <option value="business">Business</option>
                  <option value="institution">Institution</option>
                </select>
              </label>

              <label>
                <span>Inquiry Type</span>
                <select name="inquiryType" defaultValue="">
                  <option value="" disabled>
                    Product / Installation / Maintenance / Partnership
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type.toLowerCase()}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="contact-form-wide">
                <span>Interested Product or Service</span>
                <input name="interest" type="text" placeholder="e.g. Mebar Pro 550" />
              </label>

              <label className="contact-form-wide">
                <span>Message</span>
                <textarea name="message" placeholder="Tell us about your project" />
              </label>
            </div>

            <AnimatedButton className="contact-submit" type="submit">
              Send Inquiry
            </AnimatedButton>
          </form>
        </div>

        <aside className="contact-info-card" aria-label="Contact information">
          <dl>
            {contactMethods.map((method) => (
              <div key={method.label}>
                <dt>{method.label}</dt>
                <dd>
                  {method.href ? (
                    <a href={method.href}>{method.value}</a>
                  ) : (
                    method.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="contact-location-band" aria-labelledby="contact-location-title">
        <div className="page-shell contact-location">
          <p className="section-kicker">Find us</p>
          <h2 id="contact-location-title">Our Location</h2>
          <div className="contact-map-placeholder" aria-label="Map upload area" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
