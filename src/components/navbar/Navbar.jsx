import React, { useState } from "react";
import "./navbar.css";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">AC</div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#inicio" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre-mi" onClick={closeMenu}>
              Sobre Mí
            </a>
          </li>
          <li>
            <a href="#habilidades" onClick={closeMenu}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#proyectos" onClick={closeMenu}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
        <button className="nav-toggle" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
