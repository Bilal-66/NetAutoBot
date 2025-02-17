// src/pages/Home.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { HologramEffect } from '../components/HologramEffect';
import '../styles/Home.css';
import bilalImage from '../assets/images/bilal.jpg';
import { motion } from "framer-motion"; // ✅ Import de Framer Motion

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        {/* Scène 3D avec les carrés holographiques */}
        <div className="hero-background">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} />

  {/* Carré 1 */}
  <HologramEffect position={[-3, 2, 0]} size={0.5}color='#f6ff4a' />

  {/* Carré 2 */}
  <HologramEffect position={[3, 2, 0]} size={0.5} color='#83e842'/>

  {/* Carré 3 */}
  <HologramEffect position={[-2, -1, 0]} size={0.6 }color='#0000FF' />

  {/* Carré 4 */}
  <HologramEffect position={[2, -1, 0]} size={0.6 } color='#6ee2ff'/>

  {/* Carré 5 */}
  <HologramEffect position={[0, 3, -2]} size={0.5}color='#ec0400' />

  {/* Carré 6 */}
  <HologramEffect position={[0, -3, -2]} size={0.6}color='#c209ac' />

  {/* Carré 7 */}
  <HologramEffect position={[-4, 0, 0]} size={0.5}color='#9d9ba4' />

  {/* Carré 8 */}
  <HologramEffect position={[4, 0, 0]} size={0.6} color='#fa743e' />
</Canvas>
        </div>

        {/* Contenu principal */}
        <div className="hero-content">
          <div className="hero-text">

          <motion.h1
    className="animated-text"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Hi, I'm <span>Bilal Mostefi</span>
  </motion.h1>

  <motion.h2
    className="animated-text"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }} /* 🔥 Ajoute un délai pour un effet fluide */
  >
    Freelancer & Web Developer
  </motion.h2>

            
            <p>
              I specialize in web development and process automation, bringing
              ideas to life with clean code and creative solutions.
            </p>
            <div className="hero-buttons">
              <a href="/about" className="btn-primary">Hire Me</a>
              <a href="/projects" className="btn-secondary">My Portfolio</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={bilalImage}
              alt="Bilal Mostefi"
              className="profile-image"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;