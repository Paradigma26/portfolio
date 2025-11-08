import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
       
      <div className="navbar-logo">Bryan Duarte</div>
      <ul className="navbar-links">
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
