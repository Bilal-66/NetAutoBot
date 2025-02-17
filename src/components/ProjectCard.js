import React from "react";

const ProjectCard = ({ title, description, images = [], onClick }) => { 
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {Array.isArray(images) && images.length > 0 && (
        <img src={images[0]} alt={title} className="project-image" />
      )}
    </div>
  );
};

export default ProjectCard;
