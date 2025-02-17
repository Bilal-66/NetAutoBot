import React, { useState } from "react";
import { Link } from "react-router-dom";  // ✅ Utilisation de Link pour éviter le rechargement

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
          

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
