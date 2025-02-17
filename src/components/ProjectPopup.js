import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaTimes, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectPopup = ({ project, onClose }) => {
  const popupRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showRightImage, setShowRightImage] = useState(false);

  useEffect(() => {
    if (!project || !popupRef.current) return;

    gsap.fromTo(
      popupRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    );

    // Enable scrolling when popup opens
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = ""; // Reset default on unmount
    };
  }, [project]);

  const handleClose = () => {
    if (!popupRef.current) return;
    gsap.to(popupRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  const handleImageClick = () => {
    if (window.innerWidth <= 768) return; // Disable on small screens
    setShowRightImage((prev) => !prev);
  };

  const handleRightImageClick = () => {
    window.open(project.images[currentImageIndex], "_blank"); // Opens image in new tab
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  if (!project) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div
        className={`popup-container ${showRightImage ? "shift-left" : ""}`}
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={handleClose}>
          <FaTimes />
        </button>

        <div className="popup-content">
          <h2>{project.title}</h2>

          <div className="popup-image-container">
            <button className="prev-button" onClick={handlePrevImage}>⬅</button>
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="popup-image"
              onClick={handleImageClick} // Click to show right image
            />
            <button className="next-button" onClick={handleNextImage}>➡</button>
          </div>

          <p>{project.description}</p>

          {/* Technologies */}
          <div className="popup-technologies">
            <h3>Technologies Used:</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="popup-features">
            <h3>Features:</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="popup-results">
            <h3>Results:</h3>
            <ul>
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>

          <div className="popup-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Source Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> View Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right-side image preview (click to open in new tab) */}
      {showRightImage && (
        <div
          className="right-image-container show"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={project.images[currentImageIndex]}
            alt="Zoomed"
            className="right-image"
            onClick={handleRightImageClick} // Opens in new tab
          />
        </div>
      )}
    </div>
  );
};

export default ProjectPopup;
