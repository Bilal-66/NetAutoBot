import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import "../styles/About.css";
import ParticlesBackground from "../components/ParticlesBackground"; // ✅ Fond animé

// Importation des images
import PythonLogo from '../assets/images/Python.png';
import CSS3Logo from '../assets/images/CSS3.png';
import SQLDeveloperLogo from '../assets/images/SQLDeveloper.png';
import PowerBILogo from '../assets/images/Power-BI-Logo.png';
import MongoDBLogo from '../assets/images/MongoDB.png';
import JSLogo from '../assets/images/JavaScript.png';
import AzureLogo from '../assets/images/Azure.png';
import NodeJSLogo from '../assets/images/Node.js.png';
import CloudComputingLogo from '../assets/images/AWS.png';
import SeleniumLogo from '../assets/images/Selenium.png';
import AnacondaLogo from '../assets/images/Anaconda.png';
import EclipseLogo from '../assets/images/EclipseIDE.png';
import LinuxLogo from '../assets/images/Linux.png';
import HTML5Logo from '../assets/images/HTML5.png';
import PowershellLogo from '../assets/images/Powershell.png';

// ✅ Ajout des nouvelles compétences
import GoLogo from '../assets/images/Go.png';
import RustLogo from '../assets/images/Rust.png';
import RabbitMQLogo from '../assets/images/RabbitMQ.png';
import CppLogo from '../assets/images/Cpp.png';
import NginxLogo from '../assets/images/Nginx.png';
import KubernetesLogo from '../assets/images/Kubernetes.png';
import GrafanaLogo from '../assets/images/Grafana.png';
// Définition des compétences avec catégories
const skills = [
  { icon: PythonLogo, name: 'Python', description: 'Expert in automation, data science, and web development.', category: 'Languages' },
  { icon: CSS3Logo, name: 'CSS3', description: 'Advanced styling for web applications.', category: 'Languages' },
  { icon: SQLDeveloperLogo, name: 'SQL Developer', description: 'Efficient management of relational databases.', category: 'Databases' },
  { icon: PowerBILogo, name: 'Power BI', description: 'Business data analysis and visualization.', category: 'Tools' },
  { icon: MongoDBLogo, name: 'MongoDB', description: 'Scalable NoSQL database.', category: 'Databases' },
  { icon: JSLogo, name: 'JavaScript', description: 'Interactive and dynamic web development.', category: 'Languages' },
  { icon: AzureLogo, name: 'Azure', description: 'Deployment and management of cloud infrastructures.', category: 'Cloud' },
  { icon: NodeJSLogo, name: 'Node.js', description: 'Fast and efficient backend development.', category: 'Languages' },
  { icon: CloudComputingLogo, name: 'AWS', description: 'High-performance and scalable cloud infrastructure.', category: 'Cloud' },
  { icon: SeleniumLogo, name: 'Selenium', description: 'Web test automation.', category: 'Tools' },
  { icon: AnacondaLogo, name: 'Anaconda', description: 'Python environment management for AI & ML.', category: 'Tools' },
  { icon: EclipseLogo, name: 'Eclipse IDE', description: 'Software development with a powerful IDE.', category: 'Tools' },
  { icon: LinuxLogo, name: 'Linux', description: 'Administration and management of Unix systems.', category: 'Systems' },
  { icon: HTML5Logo, name: 'HTML5', description: 'Structuring and semantics of web pages.', category: 'Languages' },
  { icon: PowershellLogo, name: 'Powershell', description: 'Task automation in Windows.', category: 'Systems' },

  // ✅ Newly added skills
  { icon: GoLogo, name: 'Go', description: 'High-performance language for distributed and cloud systems.', category: 'Languages' },
  { icon: RustLogo, name: 'Rust', description: 'Ultra-secure and high-performance language used in cybersecurity.', category: 'Languages' },
  { icon: RabbitMQLogo, name: 'RabbitMQ', description: 'Message queue system for scalable architectures.', category: 'Tools' },
  { icon: CppLogo, name: 'C++', description: 'Used for high-performance computing, embedded systems, and aerospace.', category: 'Languages' },
  { icon: NginxLogo, name: 'Nginx', description: 'Ultra-fast web server for reverse proxy and load balancing.', category: 'Systems' },
  { icon: KubernetesLogo, name: 'Kubernetes (K8s)', description: 'Advanced container orchestration for production.', category: 'Cloud' },
  { icon: GrafanaLogo, name: 'Prometheus & Grafana', description: 'Advanced monitoring and system observability.', category: 'Tools' },
];


const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMobile, setIsMobile] = useState(false); // ✅ Déclaration de isMobile

  useEffect(() => {
    // Animation GSAP
    gsap.to(aboutRef.current, { opacity: 1, duration: 1 });
    gsap.to(textRef.current, { opacity: 1, y: 0, duration: 1.5, delay: 0.3 });
  
    // Fonction pour vérifier la taille de l'écran
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480); // ✅ Vérifie si l'écran est mobile
  
      if (window.innerWidth <= 480) {
        document.documentElement.style.setProperty("--mobile-margin-right", "20px"); // Ajoute une marge droite
      } else {
        document.documentElement.style.setProperty("--mobile-margin-right", "0px"); // Réinitialise sur écran large
      }
    };
  
    checkScreenSize(); // Exécute la vérification au chargement
  
    window.addEventListener('resize', checkScreenSize); // Met à jour au redimensionnement
  
    // Nettoyage de l'event listener au démontage du composant
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []); // ✅ [] pour ne l'exécuter qu'une seule fois au montage du composant
  
  
  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="about" ref={aboutRef}>
      {/* ✅ Fond animé en arrière-plan */}
      <ParticlesBackground />

      <motion.h1
        ref={textRef}
        className="neon-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Passionate about building innovative digital experiences with cutting-edge technology,
        I thrive on tackling complex problems and continuously pushing my skills further.
      </motion.p>

      {/* ✅ Sélecteur de catégories */}
      <div className="category-selector">
        {['All', 'Languages', 'Databases', 'Cloud', 'Tools', 'Systems'].map(category => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ✅ Liste des compétences */}
      <div className={`skills-container ${isMobile ? 'mobile-skills' : ''}`}>
  {filteredSkills.map((skill, index) => (
    <motion.div
      key={index}
      className="flip-card"
      whileHover={{ scale: 1.1 }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <motion.img
            src={skill.icon}
            alt={skill.name}
            className="skill-image"
            width="50"
            height="50"
          />
          <span>{skill.name}</span>
        </div>
        <div className="flip-card-back">
          <p>{skill.description}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </section>
  );
};

export default About;
