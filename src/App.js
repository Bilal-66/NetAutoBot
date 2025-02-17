import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThreeScene from "./components/ThreeScene";
import Header from "./components/Header";  // ✅ Importation du Header
import Footer from "./components/Footer";  // ✅ Importation du Footer

const App = () => {
  return (
    <Router>
      <Header />  {/* ✅ Utilisation du composant Header */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/three" element={<ThreeScene />} />
      </Routes>

      <Footer />  {/* ✅ Utilisation du composant Footer */}
    </Router>
  );
};

export default App;
