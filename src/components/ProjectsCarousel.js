import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import ProjectCard from "./ProjectCard";

const ProjectsCarousel = ({ projects, onProjectClick, disableCarouselButtons }) => {
  const carouselRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [projectWidth, setProjectWidth] = useState(0);

  // Calculer la largeur d'un projet pour l'utiliser dans le défilement
  useEffect(() => {
    const updateProjectWidth = () => {
      if (carouselRef.current && carouselRef.current.children.length > 0) {
        setProjectWidth(carouselRef.current.children[0].offsetWidth);
      }
    };

    updateProjectWidth();
    window.addEventListener("resize", updateProjectWidth);
    return () => window.removeEventListener("resize", updateProjectWidth);
  }, []);

  // Vérifier si on peut scroller à gauche ou à droite
  const checkScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const tolerance = 5; // Marge d'erreur pour éviter les petits écarts de pixels

    setCanScrollLeft(container.scrollLeft > tolerance);
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - tolerance);
  };

  useEffect(() => {
    checkScroll();
    carouselRef.current?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      carouselRef.current?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollLeft = (event) => {
    event.preventDefault();
    if (!canScrollLeft) return;
    gsap.to(carouselRef.current, {
      scrollLeft: `-=${projectWidth + 10}`,
      duration: 0.6,
      ease: "power3.out",
      onUpdate: checkScroll,
    });
  };
  
  const scrollRight = (event) => {
    event.preventDefault();
    if (!canScrollRight) return;
    gsap.to(carouselRef.current, {
      scrollLeft: `+=${projectWidth + 10}`,
      duration: 0.6,
      ease: "power3.out",
      onUpdate: checkScroll,
    });
  };

  return (
    <div className="carousel-container">
      {/* Masquer les boutons si disableCarouselButtons est true */}
      {!disableCarouselButtons && (
        <>
          <button
            className={`carousel-button left ${!canScrollLeft ? "disabled" : ""}`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            ←
          </button>

          <button
            className={`carousel-button right ${!canScrollRight ? "disabled" : ""}`}
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            →
          </button>
        </>
      )}

      <div className="carousel" ref={carouselRef}>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              onClick={() => onProjectClick(project)}
            />
          ))
        ) : (
          <p className="no-projects">No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsCarousel;
