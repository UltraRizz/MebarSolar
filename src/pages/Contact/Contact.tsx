import React from "react";
import { siteConfig } from "../../config/site";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section className="section page-shell contact-page">
      <div>
        <p className="eyebrow">{siteConfig.brand.name}</p>
        <h1>{siteConfig.contactPage.title}</h1>
        <p>{siteConfig.contactPage.body}</p>
      </div>

      <div className="contact-details">
        <p>
          <strong>Email</strong>
          <span>{siteConfig.contact.email}</span>
        </p>
        <p>
          <strong>Phone</strong>
          <span>{siteConfig.contact.phone}</span>
        </p>
        <p>
          <strong>Location</strong>
          <span>{siteConfig.contact.location}</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
