import React, { useState } from 'react';
import './Fillter.css';
import projects from './projectData';

function ProjectCard({ title, description, image, buttonLabel, link }) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonLabel && link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="project-button">{buttonLabel}</button>
        </a>
      )}
    </div>
  );
}

export default function ProjectFilter() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((proj) => {
    const matchesType = filter === 'all' || proj.type === filter;
    const matchesSearch = proj.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

      <h2 className="project-filter-header">Project Section</h2>

      

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {['all', 'minor', 'mid', 'major'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`filter-button ${filter === type ? 'active' : ''}`}
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
          />
        ))}
      </div>
    </div>
  );
}
