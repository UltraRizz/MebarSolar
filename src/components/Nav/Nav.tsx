import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoImage from "../../assets/images/home/Logo.png";
import logoLightImage from "../../assets/images/home/Logo_white.png";
import { products } from "../../data";
import "./Nav.css";

const menuLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

type PanelMode = "menu" | "products";
type RailTone = "light" | "dark" | "image";

const railWords = {
  menu: "Menu",
  products: "Products",
};
const progressSegmentCount = 120;

const parseRgb = (color: string) => {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);

  if (!match) {
    return null;
  }

  const [, r, g, b, a = "1"] = match;

  return {
    r: Number(r),
    g: Number(g),
    b: Number(b),
    a: Number(a),
  };
};

const getLuminance = ({ r, g, b }: { r: number; g: number; b: number }) =>
  (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

const getGradientTone = (backgroundImage: string): RailTone | null => {
  if (!backgroundImage.includes("gradient")) {
    return null;
  }

  const colors = backgroundImage
    .match(/rgba?\([^)]+\)/g)
    ?.map(parseRgb)
    .filter((color): color is { r: number; g: number; b: number; a: number } => Boolean(color));

  if (!colors?.length) {
    return null;
  }

  const averageLuminance =
    colors.reduce((total, color) => total + getLuminance(color), 0) / colors.length;

  return averageLuminance > 0.68 ? "light" : "dark";
};

const getBackgroundToneAtPoint = (x: number, y: number): RailTone => {
  const elements = document.elementsFromPoint(x, y);

  for (const element of elements) {
    if (
      element.closest(".site-nav") ||
      element.closest(".menu-overlay") ||
      element === document.documentElement ||
      element === document.body
    ) {
      continue;
    }

    const styles = window.getComputedStyle(element);

    if (styles.backgroundImage && styles.backgroundImage !== "none") {
      if (styles.backgroundImage.includes("url(")) {
        return "image";
      }

      const gradientTone = getGradientTone(styles.backgroundImage);

      if (gradientTone) {
        return gradientTone;
      }
    }

    if (element.tagName === "IMG" || element.tagName === "VIDEO" || element.tagName === "CANVAS") {
      return "image";
    }

    const color = parseRgb(styles.backgroundColor);

    if (color && color.a > 0.35) {
      return getLuminance(color) > 0.68 ? "light" : "dark";
    }
  }

  const bodyColor = parseRgb(window.getComputedStyle(document.body).backgroundColor);

  if (!bodyColor) {
    return "light";
  }

  return getLuminance(bodyColor) > 0.68 ? "light" : "dark";
};

const RailWord = ({
  text,
  tones,
}: {
  text: string;
  tones: RailTone[];
}) => (
  <span className="rail-word" aria-hidden="true">
    {text.split("").map((letter, index) => (
      <span className={`rail-letter tone-${tones[index] ?? "image"}`} key={`${letter}-${index}`}>
        {letter}
      </span>
    ))}
  </span>
);

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelMode, setPanelMode] = useState<PanelMode>("menu");
  const [menuTones, setMenuTones] = useState<RailTone[]>(
    Array.from({ length: railWords.menu.length }, () => "light"),
  );
  const [productTones, setProductTones] = useState<RailTone[]>(
    Array.from({ length: railWords.products.length }, () => "light"),
  );
  const [iconTone, setIconTone] = useState<RailTone>("light");
  const [logoTone, setLogoTone] = useState<RailTone>("light");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedScrollProgress, setAnimatedScrollProgress] = useState(0);
  const [progressTones, setProgressTones] = useState<RailTone[]>(
    Array.from({ length: progressSegmentCount }, () => "light"),
  );
  const brandRef = useRef<HTMLAnchorElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const progressTargetRef = useRef(0);
  const location = useLocation();
  const isProductRoute = location.pathname.startsWith("/product");
  const isProductDetailRoute =
    location.pathname === "/product-detail" || location.pathname.startsWith("/product/");

  const openPanel = (mode: PanelMode) => {
    setPanelMode(mode);
    setMenuOpen(true);
  };

  const closePanel = () => setMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePanel();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateLetterTones = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
        progressTargetRef.current = nextProgress;
        setScrollProgress(nextProgress);

        if (menuOpen) {
          setMenuTones(Array.from({ length: railWords.menu.length }, () => "dark"));
          setProductTones(Array.from({ length: railWords.products.length }, () => "dark"));
          setIconTone("dark");
          setLogoTone("dark");
          setProgressTones(Array.from({ length: progressSegmentCount }, () => "dark"));
          return;
        }

        const sampleWord = (selector: string) =>
          Array.from(
            railRef.current?.querySelectorAll<HTMLElement>(`${selector} .rail-letter`) ?? [],
          ).map((letter) => {
            const rect = letter.getBoundingClientRect();

            return getBackgroundToneAtPoint(
              rect.left + rect.width / 2,
              rect.top + rect.height / 2,
            );
          });

        setMenuTones(sampleWord(".rail-menu-label"));
        setProductTones(sampleWord(".rail-products-label"));

        const icon = railRef.current?.querySelector<HTMLElement>(".menu-icon");

        if (icon) {
          const rect = icon.getBoundingClientRect();

          setIconTone(
            getBackgroundToneAtPoint(
              rect.left + rect.width / 2,
              rect.top + rect.height / 2,
            ),
          );
        }

        const brand = brandRef.current;

        if (brand) {
          const rect = brand.getBoundingClientRect();

          setLogoTone(
            getBackgroundToneAtPoint(
              rect.left + rect.width / 2,
              rect.top + rect.height / 2,
            ),
          );
        }

        setProgressTones(
          Array.from(
            railRef.current?.querySelectorAll<HTMLElement>(".rail-progress-segment") ?? [],
          ).map((segment) => {
            const rect = segment.getBoundingClientRect();

            return getBackgroundToneAtPoint(
              rect.left + rect.width / 2,
              rect.top + rect.height / 2,
            );
          }),
        );
      });
    };

    updateLetterTones();

    window.addEventListener("scroll", updateLetterTones, { passive: true });
    window.addEventListener("resize", updateLetterTones);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateLetterTones);
      window.removeEventListener("resize", updateLetterTones);
    };
  }, [location.pathname, menuOpen]);

  useEffect(() => {
    let frame = 0;

    const animateProgress = () => {
      setAnimatedScrollProgress((currentProgress) => {
        const nextProgress =
          currentProgress + (progressTargetRef.current - currentProgress) * 0.14;

        if (Math.abs(progressTargetRef.current - nextProgress) < 0.0015) {
          return progressTargetRef.current;
        }

        frame = requestAnimationFrame(animateProgress);
        return nextProgress;
      });
    };

    frame = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [scrollProgress]);

  return (
    <>
      <header className="site-nav">
        <Link
          ref={brandRef}
          className={`brand tone-${logoTone}`}
          to="/"
          aria-label="Mebar Solar home"
        >
          <img className="brand-logo-dark" src={logoImage} alt="Mebar Solar" />
          <img className="brand-logo-light" src={logoLightImage} alt="" aria-hidden="true" />
        </Link>

        <div
          ref={railRef}
          className={`nav-rail${menuOpen ? " is-open" : ""}`}
          aria-label="Site navigation controls"
        >
          <button
            className={`rail-trigger rail-menu-trigger${panelMode === "menu" && menuOpen ? " is-active" : ""}`}
            type="button"
            aria-label={menuOpen && panelMode === "menu" ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen && panelMode === "menu"}
            onClick={() => (menuOpen && panelMode === "menu" ? closePanel() : openPanel("menu"))}
          >
            <span className={`menu-icon tone-${iconTone}`} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="rail-menu-label">
              <RailWord text={railWords.menu} tones={menuTones} />
            </span>
          </button>

          <div className="rail-progress" aria-hidden="true">
            {Array.from({ length: progressSegmentCount }).map((_, index) => {
              const segmentFill = Math.min(
                Math.max(animatedScrollProgress * progressSegmentCount - index, 0),
                1,
              );

              return (
                <span
                  className={`rail-progress-segment tone-${progressTones[index] ?? "image"}`}
                  key={index}
                  style={{ "--segment-fill": segmentFill } as React.CSSProperties}
                />
              );
            })}
          </div>

          <button
            className={`rail-link${isProductRoute ? " is-current" : ""}${panelMode === "products" && menuOpen ? " is-active" : ""}`}
            type="button"
            aria-label="Open product menu"
            aria-expanded={menuOpen && panelMode === "products"}
            onClick={() => (menuOpen && panelMode === "products" ? closePanel() : openPanel("products"))}
          >
            <span className="rail-products-label">
              <RailWord text={railWords.products} tones={productTones} />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`menu-overlay${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="menu-scrim"
          type="button"
          aria-label="Close menu"
          onClick={closePanel}
        />

        <section className="menu-context" aria-label="Menu preview" />

        <section className="menu-panel" aria-label={panelMode === "products" ? "Product menu" : "Main menu"}>
          {panelMode === "menu" ? (
            <div className="menu-panel-content">
              <p>What do you want to explore?</p>
              <nav className="menu-links">
                {menuLinks.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={closePanel}
                  >
                    <span>{link.label}</span>
                  </NavLink>
                ))}
                <NavLink
                  className={`menu-mode-link${isProductRoute ? " is-active" : ""}`}
                  to="/products"
                  onClick={closePanel}
                >
                  <span>Products</span>
                </NavLink>
              </nav>
            </div>
          ) : (
            <div className="menu-panel-content">
              <button
                className="menu-back"
                type="button"
                onClick={() => setPanelMode("menu")}
              >
                Back to menu
              </button>
              <p>Select a product</p>
              <nav className="product-menu-grid">
                {products.map((product, index) => (
                  <NavLink
                    key={product.code}
                    to="/product-detail"
                    className={isProductDetailRoute && index === 0 ? "is-active" : undefined}
                    onClick={closePanel}
                  >
                    <small>{String(index + 1).padStart(2, "0")}.</small>
                    <span>{product.code}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Nav;
