import React, { useState } from "react";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import heroImage from "../../assets/images/about/section.png";
import "./FAQ.css";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqSections: { title: string; items: FaqItem[] }[] = [
  {
    title: "Installation",
    items: [
      {
        id: "installation-time",
        question: "How long does a solar installation take?",
        answer:
          "Most residential installations are completed within 2-4 days depending on system size and site conditions.",
      },
      {
        id: "home-during-installation",
        question: "Do I need to be home during installation?",
        answer:
          "You only need to be available for site access and final handover. Our installation team manages the setup, testing, and cleanup.",
      },
      {
        id: "site-check",
        question: "Do you inspect the site before installation?",
        answer:
          "Yes. We review roof space, sunlight exposure, wiring access, and energy needs before recommending a system.",
      },
      {
        id: "roof-type",
        question: "Can solar panels be installed on any roof type?",
        answer:
          "Most metal and concrete roofs can support solar installation. We confirm roof condition, slope, shade, and mounting requirements during the site visit.",
      },
    ],
  },
  {
    title: "Pricing & Quotation",
    items: [
      {
        id: "system-cost",
        question: "How much does a solar system cost?",
        answer:
          "Pricing depends on system size, panel type, inverter choice, installation complexity, and your energy usage. We provide a clear quotation after assessment.",
      },
      {
        id: "payment-options",
        question: "Do you offer payment options?",
        answer:
          "Yes. Our team can discuss available payment options and help you choose a plan that suits your project budget.",
      },
      {
        id: "quotation-time",
        question: "How long does it take to receive a quotation?",
        answer:
          "After we collect your site and energy details, most quotations can be prepared within a few working days.",
      },
    ],
  },
  {
    title: "Warranty",
    items: [
      {
        id: "warranty",
        question: "What warranty do the panels carry?",
        answer:
          "Our solar panels include long-term performance warranty coverage, with exact terms depending on the selected product.",
      },
      {
        id: "inverter-warranty",
        question: "Is the inverter also covered by warranty?",
        answer:
          "Yes. Inverters include manufacturer warranty coverage, and we explain the exact period and conditions in your quotation.",
      },
      {
        id: "warranty-claim",
        question: "How do I make a warranty claim?",
        answer:
          "Contact our support team with your installation details. We will inspect the issue and guide you through the warranty process.",
      },
    ],
  },
  {
    title: "Maintenance",
    items: [
      {
        id: "maintenance",
        question: "How often do panels need maintenance?",
        answer:
          "Solar panels need light maintenance such as cleaning and routine inspection to keep performance strong over time.",
      },
      {
        id: "panel-cleaning",
        question: "Do you provide panel cleaning services?",
        answer:
          "Yes. We can arrange cleaning and inspection support so the system continues producing reliable power.",
      },
      {
        id: "monitoring",
        question: "Can I monitor how much energy my system produces?",
        answer:
          "Many systems include monitoring options. We can recommend a setup that helps you track daily and monthly energy production.",
      },
    ],
  },
  {
    title: "Product Performance",
    items: [
      {
        id: "monsoon-winter",
        question: "Do panels work during monsoon and winter?",
        answer:
          "Yes. Solar panels still generate power in cloudy, cold, and winter conditions, though output changes with sunlight levels.",
      },
      {
        id: "power-cut",
        question: "Will solar work during a power cut?",
        answer:
          "A standard grid-tied system shuts down during outages for safety. Backup batteries or hybrid systems can provide power during cuts.",
      },
      {
        id: "panel-life",
        question: "How long do solar panels last?",
        answer:
          "Quality solar panels are designed to perform for decades, with gradual output reduction over time.",
      },
    ],
  },
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    () => new Set(["installation-time"])
  );

  const toggleItem = (id: string) => {
    setOpenItems((current) => {
      const next = new Set(current);

      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
  };

  return (
    <div className="faq-page">
      <section className="faq-hero" aria-labelledby="faq-hero-title">
        <img
          className="faq-hero-image"
          src={heroImage}
          alt="Blue sky with soft clouds"
        />
        <div className="faq-hero-shade" aria-hidden="true" />

        <div className="page-shell faq-hero-content">
          <p className="section-kicker">Help Center</p>
          <h1 id="faq-hero-title">Frequently Asked Questions</h1>
          <p>
            Answers to common questions about solar panels, pricing,
            installation, and support in Bhutan.
          </p>
        </div>
      </section>

      <div className="faq-sections">
        {faqSections.map((section) => (
          <section
            className="faq-band"
            aria-labelledby={`${section.title.toLowerCase().replace(/\W+/g, "-")}-title`}
            key={section.title}
          >
            <div className="page-shell faq-section">
              <p className="section-kicker">FAQ</p>
              <h2 id={`${section.title.toLowerCase().replace(/\W+/g, "-")}-title`}>
                {section.title}
              </h2>

              <div className="faq-list">
                {section.items.map((item) => {
                  const isOpen = openItems.has(item.id);

                  return (
                    <article
                      className={`faq-item${isOpen ? " is-open" : ""}`}
                      key={item.id}
                    >
                      <button
                        className="faq-question"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`${item.id}-answer`}
                        onClick={() => toggleItem(item.id)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-toggle" aria-hidden="true">
                          {isOpen ? "-" : "+"}
                        </span>
                      </button>

                      <div
                        className="faq-answer"
                        id={`${item.id}-answer`}
                        hidden={!isOpen}
                      >
                        <p>{item.answer}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="faq-cta" aria-labelledby="faq-cta-title">
        <div className="page-shell faq-cta-inner">
          <h2 id="faq-cta-title">Still have questions? We're happy to help.</h2>
          <AnimatedButton to="/contact">Get a quote</AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
