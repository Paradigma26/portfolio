import React from "react";
import "./Hero.css";
import perfil from "../assets/profile.jpeg";
import StarBorder from "./StarBorder";
import Lightning from "./LightningBackground";

function Hero() {
  return (
    <section className="hero">
 
      <div className="hero-bg">
        <Lightning hue={262} xOffset={-0.4} speed={1} intensity={1.4} size={2.7} />
      </div>

      <div className="hero-left">
        <h1>
          Hola!, soy <span>Bryan Duarte</span>
        </h1>
        <p>
          Desarrollador Frontend apasionado por crear aplicaciones web y móviles
          intuitivas usando recursos como React.js y Flutter
        </p>

        <div className="tech-buttons">
          <button>React</button>
          <button>Flutter</button>
          <button>JavaScript</button>
          <button>Dart</button>
          <button>Html</button>
          <button>Css</button>
        </div>

        <div className="hero-actions">
          <a className="primary-btn" href="#projects">Ver mis proyectos</a>
          <div className="social-icons">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <StarBorder color="#8d31f7ff" speed="10s">
          <img src={perfil} alt="Perfil" className="profile-img" />
        </StarBorder>
      </div>
    </section>
  );
}

export default Hero;
