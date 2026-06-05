import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import heroImage from "../../assets/images/about/section.png";
import "./FAQ.css";

gsap.registerPlugin(ScrollTrigger);

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
  const pageRef = useRef<HTMLDivElement>(null);
  const activeFaqIdRef = useRef("installation-time");
  const manualScrollUntilRef = useRef(0);
  const manualTargetFaqIdRef = useRef<string | null>(null);
  const manualReleaseTimerRef = useRef<number | null>(null);
  const manualScrollTweenRef = useRef<gsap.core.Tween | null>(null);
  const [openItems, setOpenItems] = useState<Set<string>>(
    () => new Set(["installation-time"])
  );

  const setActiveFaq = (id: string) => {
    if (activeFaqIdRef.current === id) {
      return;
    }

    activeFaqIdRef.current = id;
    setOpenItems(new Set([id]));
  };

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    let frame = 0;
    let removeResizeListener = () => {};
    let pageTrigger: ScrollTrigger | undefined;

    const context = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".faq-item[data-faq-id]");

      const updateActiveItem = () => {
        if (
          manualTargetFaqIdRef.current &&
          Date.now() < manualScrollUntilRef.current
        ) {
          setActiveFaq(manualTargetFaqIdRef.current);
          return;
        }

        manualTargetFaqIdRef.current = null;
        cancelAnimationFrame(frame);

        frame = requestAnimationFrame(() => {
          if (!items.length) {
            return;
          }

          const activationY = window.innerHeight * 0.4;
          const scoredItems = items.map((item) => {
            const rect = item.getBoundingClientRect();

            return {
              id: item.dataset.faqId ?? "",
              item,
              distance: Math.abs(rect.top - activationY),
              passedTop: rect.top <= activationY,
            };
          });

          const active =
            scoredItems
              .filter((entry) => entry.passedTop)
              .sort((a, b) => a.distance - b.distance)[0] ??
            scoredItems.sort((a, b) => a.distance - b.distance)[0];

          if (!active?.id) {
            return;
          }

          setActiveFaq(active.id);

          if (!active.item.classList.contains("has-scroll-highlight")) {
            active.item.classList.add("has-scroll-highlight");
            gsap.fromTo(
              active.item,
              { y: 14, autoAlpha: 0.76 },
              { y: 0, autoAlpha: 1, duration: 0.65, ease: "power3.out" },
            );
          }
        });
      };

      pageTrigger = ScrollTrigger.create({
        trigger: page,
        start: "top top",
        end: "bottom bottom",
        onUpdate: updateActiveItem,
        onRefresh: updateActiveItem,
      });

      window.addEventListener("resize", updateActiveItem);
      removeResizeListener = () => window.removeEventListener("resize", updateActiveItem);
      updateActiveItem();
    }, page);

    return () => {
      cancelAnimationFrame(frame);
      if (manualReleaseTimerRef.current) {
        window.clearTimeout(manualReleaseTimerRef.current);
      }
      manualScrollTweenRef.current?.kill();
      removeResizeListener();
      pageTrigger?.kill();
      context.revert();
    };
  }, []);

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [openItems]);

  const toggleItem = (id: string) => {
    if (manualReleaseTimerRef.current) {
      window.clearTimeout(manualReleaseTimerRef.current);
    }

    manualScrollTweenRef.current?.kill();
    manualTargetFaqIdRef.current = id;
    manualScrollUntilRef.current = Date.now() + 2400;
    activeFaqIdRef.current = id;
    setOpenItems(new Set([id]));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const item = pageRef.current?.querySelector<HTMLElement>(
          `.faq-item[data-faq-id="${id}"]`,
        );

        if (!item) {
          return;
        }

        const activationY = window.innerHeight * 0.4;
        const maxScroll = Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          0,
        );
        const targetTop = Math.min(
          Math.max(item.getBoundingClientRect().top + window.scrollY - activationY, 0),
          maxScroll,
        );
        const scrollState = { y: window.scrollY };

        manualScrollTweenRef.current = gsap.to(scrollState, {
          y: targetTop,
          duration: 0.85,
          ease: "power3.out",
          onUpdate: () => {
            window.scrollTo(0, scrollState.y);
            setActiveFaq(id);
          },
          onComplete: () => {
            setActiveFaq(id);
            manualScrollUntilRef.current = 0;
            manualTargetFaqIdRef.current = null;
            manualScrollTweenRef.current = null;
            ScrollTrigger.refresh();
          },
        });

        manualReleaseTimerRef.current = window.setTimeout(() => {
          manualScrollUntilRef.current = 0;
          manualTargetFaqIdRef.current = null;
          manualScrollTweenRef.current = null;
          ScrollTrigger.refresh();
        }, 1300);
      });
    });
  };

  return (
    <div ref={pageRef} className="faq-page">
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
                      data-faq-id={item.id}
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
                        aria-hidden={!isOpen}
                      >
                        <div className="faq-answer-inner">
                          <p>{item.answer}</p>
                        </div>
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
