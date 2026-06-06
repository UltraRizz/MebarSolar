import React, { useRef } from "react";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import Footer from "../../components/Footer/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";
import heroImage from "../../assets/images/about/section.png";
import projectOne from "../../assets/project/proj1.jpg";
import projectTwo from "../../assets/project/proj2.jpg";
import projectThree from "../../assets/project/proj3.jpg";
import projectFour from "../../assets/project/porj4.jpg";
import projectFive from "../../assets/project/proj5.jpg";
import projectSix from "../../assets/project/proj6.jpg";
import "./Projects.css";

type Project = {
  title: string;
  location: string;
  size: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Thimphu Residence",
    location: "Thimphu",
    size: "5kW",
    category: "Homeowner",
    year: "2026",
    image: projectOne,
    alt: "Wind turbines and solar installation at sunset",
    description: "Rooftop system covering most of a family home's daily energy use.",
  },
  {
    title: "Paro Guesthouse",
    location: "Paro",
    size: "8kW",
    category: "Business",
    year: "2025",
    image: projectTwo,
    alt: "Solar panel field below a bright cloudy sky",
    description: "Commercial array cutting electricity costs for a busy guesthouse.",
  },
  {
    title: "Punakha School",
    location: "Punakha",
    size: "20kW",
    category: "Institution",
    year: "2024",
    image: projectThree,
    alt: "Solar panels under a clear blue sky",
    description: "Solar power supporting classrooms and dormitory facilities.",
  },
  {
    title: "Bumthang Off-Grid Home",
    location: "Bumthang",
    size: "3kW",
    category: "Off-grid",
    year: "2024",
    image: projectFour,
    alt: "Aerial view of solar panels mounted over green ground",
    description: "Independent power for a remote household beyond the grid.",
  },
  {
    title: "Phuentsholing Warehouse",
    location: "Phuentsholing",
    size: "30kW",
    category: "Industrial",
    year: "2025",
    image: projectFive,
    alt: "Close view of solar panel rows in daylight",
    description: "Large rooftop array offsetting daytime industrial load.",
  },
  {
    title: "Wangdue Clinic",
    location: "Wangdue",
    size: "6kW",
    category: "Healthcare",
    year: "2023",
    image: projectSix,
    alt: "Solar panel array below a partly cloudy sky",
    description: "Reliable backup-friendly solar for a rural health clinic.",
  },
];

const impactMetrics = [
  { value: "15 MW", label: "Installed capacity" },
  { value: "2.1 GWh", label: "Annual generation" },
  { value: "Nu 18M+", label: "Saved by clients" },
  { value: "1,200+", label: "Households powered" },
];

const Projects: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useScrollReveal(pageRef, [
    ".project-card",
    ".projects-impact > .section-kicker",
    ".projects-impact h2",
    ".projects-impact-card",
    ".projects-cta h2",
    ".projects-cta .mab-button",
  ]);

  return (
    <div ref={pageRef} className="projects-page">
      <section className="projects-hero" aria-labelledby="projects-hero-title">
        <img
          className="projects-hero-image"
          src={heroImage}
          alt="Solar panels below a clear blue sky"
        />
        <div className="projects-hero-shade" aria-hidden="true" />

        <div className="page-shell projects-hero-content">
          <p className="section-kicker">Our work</p>
          <h1 id="projects-hero-title">Our Solar Installations</h1>
          <p>
            Real systems delivering clean, reliable energy to homes and
            businesses across Bhutan.
          </p>
        </div>
      </section>

      <section className="projects-gallery page-shell" aria-label="Solar projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <figure className="project-card-media">
                <img src={project.image} alt={project.alt} />
                <figcaption>{project.year}</figcaption>
              </figure>

              <div className="project-card-body">
                <h2>{project.title}</h2>
                <dl className="project-meta" aria-label={`${project.title} details`}>
                  <div>
                    <dt>Location</dt>
                    <dd>{project.location}</dd>
                  </div>
                  <div>
                    <dt>Size</dt>
                    <dd>{project.size}</dd>
                  </div>
                  <div>
                    <dt>Type</dt>
                    <dd>{project.category}</dd>
                  </div>
                </dl>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-impact page-shell" aria-labelledby="projects-impact-title">
        <p className="section-kicker">The impact</p>
        <h2 id="projects-impact-title">Results That Add Up</h2>

        <div className="projects-impact-grid">
          {impactMetrics.map((metric) => (
            <article className="projects-impact-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-cta" aria-label="Start your solar project">
        <div className="page-shell projects-cta-inner">
          <h2>Want results like these? Start your solar project today.</h2>
          <AnimatedButton to="/contact">Get a quote</AnimatedButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
