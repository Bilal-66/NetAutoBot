import React, { useState, useEffect } from "react";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ProjectPopup from "../components/ProjectPopup";
import projectsData from "../data/projects.json";
import "../styles/Projects.css";
import { motion } from "framer-motion";
import Diagram from "../assets/images/Diagram.jpg";
import Bilal from "../assets/images/Recommandation Letter.jpg";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    try {
      console.log("Original projectsData:", projectsData); // Log the imported JSON
  
      const updatedProjects = projectsData.map((project) => ({
        ...project,
        images: project.images
          ? project.images.map((img) => {
              console.log("Processing image:", img); // Debugging image mapping
  
              if (img === "Diagram.jpg") return Diagram;
              if (img === "Recommandation Letter.jpg") return Bilal;
  
              try {
                return require(`../assets/images/${img}`);
              } catch (error) {
                console.error(`Error loading image: ${img}`, error);
                return null; // Avoid breaking the map function
              }
            })
          : [],
      }));
  
      console.log("Updated Projects:", updatedProjects); // Log the updated projects
      setProjects(updatedProjects);
    } catch (error) {
      console.error("Error loading projects:", error);
    }
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className={`projects-section ${selectedProject ? "project-open" : ""}`}>
      <div className="projects-header">
        <motion.h1
          className="animated-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Explore my latest works and interactive experiences.
        </motion.p>
      </div>

      {projects.length > 0 ? (
        <ProjectsCarousel
          projects={projects}
          onProjectClick={handleProjectClick}
          disableCarouselButtons={!!selectedProject}
        />
      ) : (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Loading projects...
        </motion.p>
      )}

      {selectedProject && <ProjectPopup project={selectedProject} onClose={closePopup} />}
    </section>
  );
};

export default Projects;
