export type SiteRoute = {
  label: string;
  path: string;
};

export type SiteFeature = {
  title: string;
  description: string;
};

export const siteConfig = {
  brand: {
    name: "Mebar Solar",
    tagline: "Clean energy for resilient homes and businesses",
    description:
      "A flexible React website template with global content and theme variables ready for your final copy.",
  },
  contact: {
    email: "hello@example.com",
    phone: "+975 00 000 000",
    location: "Thimphu, Bhutan",
  },
  cta: {
    primaryLabel: "Get Started",
    primaryPath: "/contact",
    secondaryLabel: "Learn More",
    secondaryPath: "/about",
  },
  routes: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ] satisfies SiteRoute[],
  home: {
    eyebrow: "React Website Starter",
    heroTitle: "Build from a clean, editable foundation",
    heroText:
      "Use this starter as the base for your next site. Update one config file for copy, navigation, and contact details, then adjust theme variables for the visual system.",
    features: [
      {
        title: "Central Content",
        description:
          "Global labels, routes, calls to action, and contact details live in one typed config file.",
      },
      {
        title: "Reusable Layout",
        description:
          "Navigation, footer, page wrappers, and route handling are already wired up.",
      },
      {
        title: "Theme Variables",
        description:
          "Colors, spacing, shadows, radii, and responsive font sizes are controlled with CSS variables.",
      },
    ] satisfies SiteFeature[],
  },
  about: {
    title: "About This Template",
    body:
      "This page is intentionally minimal. Replace this text with your organization story, service details, or project background when the final content is ready.",
  },
  contactPage: {
    title: "Contact",
    body:
      "Update the contact details in src/config/site.ts and connect this page to your preferred form or email service.",
  },
};
