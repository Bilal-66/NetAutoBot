import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Version optimisée pour de meilleures performances

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Engine Loaded:", engine);
    await loadSlim(engine); // Charge uniquement les fonctionnalités nécessaires
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Garde les particules dans la section, pas sur tout l'écran
        background: { color: "transparent" }, // Fond transparent
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } }, // Nombre et densité des particules
          color: { value: "#7c3aed" }, // Couleur principale (violet)
          shape: {
            type: ["triangle", "polygon"], // ✅ Formes géométriques (triangles + hexagones)
            polygon: { sides: 6 }, // Hexagones
          },
          opacity: { value: 0.5, random: true }, // Opacité aléatoire
          size: { value: 4, random: true }, // Taille aléatoire des particules
          move: {
            enable: true,
            speed: 1.2, // Vitesse de mouvement
            direction: "none",
            outModes: { default: "out" }, // Permet aux particules de revenir après être sorties de l'écran
          },
          links: { enable: false }, // ❌ Supprime les lignes entre particules
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // Repousse les particules au survol
            onClick: { enable: true, mode: "push" }, // Ajoute des particules au clic
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }, // Distance et durée du repoussement
            push: { quantity: 3 }, // Nombre de particules ajoutées au clic
          },
        },
        detectRetina: true, // Meilleure qualité sur écrans haute résolution
      }}
      className="particles-container"
    />
  );
};

export default ParticlesBackground;
