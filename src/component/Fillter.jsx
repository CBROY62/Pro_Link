import React, { useState } from "react";
import "./Fillter.css";
import projects from "./projectData";

function ProjectCard({ title, description, image, buttonLabel, link,demoCodeLabel,demoCodeLink }) {
  return (
   <div className="project-card">
  {image && <img src={image} alt={title} className="project-image" />}
  <h3>{title}</h3>
  <p>{description}</p>

  {/* Existing button */}
  {(buttonLabel && link) && (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="project-button">{buttonLabel}</button>
    </a>
  )}

  {/* New Demo Code button */}
  {(demoCodeLabel && demoCodeLink) && (
    <a href={demoCodeLink} target="_blank" rel="noopener noreferrer">
      <button className="project-button">{demoCodeLabel}</button>
    </a>
  )}
</div>

  );
}

export default function ProjectFilter() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((proj) => {
    const matchesType = filter === "all" || proj.type === filter;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="project-filter-container">
      {/* Search Bar */}
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>
      <h1 className="project-filter-header">Project Section</h1>
      <marquee className="project-filter-heade">
        <span className="span1">HTML</span> <span className="span12">..............</span>
        <span className="span2">CSS</span><span className="span12">..............</span>
        <span className="span3">Javascript</span><span className="span12">..............</span>
        <span className="span4">Node.js</span><span className="span12">..............</span>
        <span className="span5">Mongodb</span><span className="span12">..............</span>
        <span className="span6">with Framework .&. Library</span>
      </marquee>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["all", "minor", "mid", "major"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`filter-button ${filter === type ? "active" : ""}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)} Projects
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            buttonLabel={project.buttonLabel}
            link={project.link}
            demoCodeLabel={project.demoCodeLabel}
            demoCodeLink= { project.demoCodeLink }
          />
        ))}
      </div>
    </div>
  );
}
