import React, { useState } from "react";
import "./Projects.css";
import almar from "../assets/almar.png";
import dasad from "../assets/almaradmin/dasad.png"
import logad from "../assets/almaradmin/logad.png"
import modad from "../assets/almaradmin/modad.png"
import modof from "../assets/almaradmin/modof.png"
import ofad from "../assets/almaradmin/ofad.png"
import ped from "../assets/almaradmin/ped.png"
import proad from "../assets/almaradmin/proad.png"
import log from "../assets/habitum/log.png"
import re from "../assets/habitum/re.png"
import uno from "../assets/habitum/uno.png"
import dos from "../assets/habitum/dos.png"
import tres from "../assets/habitum/tres.png"
import cuatro from "../assets/habitum/cuatro.png"
import cinco from "../assets/habitum/cinco.png"
import seis from "../assets/habitum/seis.png"
import siete from "../assets/habitum/siete.png"
import glack from "../assets/glack.png"

const projectsData = [
  {
    id: 1,
    title: "GlackStudios | Portfolio",
    tech: ["React.js", "CSS"],
    image: glack,
    demo: "https://glackstudios.vercel.app",
  },
  {
    id: 2,
    title: "AlmarBeauty Shop",
    tech: ["React.js", "CSS", "Supabase"],
    image: almar,
    demo: "https://almarbeauty.vercel.app/",
  },
  {
    id: 3,
    title: "Admin AlmarBeauty Shop",
    tech: ["React.js", "CSS", "Supabase"],
    image: dasad,
    images: [
        logad,
        dasad,
        proad,
        modad,
        ofad,
        modof,
        ped,
    ],
  },
  {
    id: 4,
    title: "Habitum+",
    tech: ["Flutter", "CSS", "Firabase"],
    image: cuatro,
    images: [
       uno,
       dos,
       tres,
       cuatro,
       log,
       re,
       cinco,
       seis,
       siete,
    ],
  },
];

const techFilters = ["Todo", "React.js", "Flutter", "JavaScript", "HTML/CSS"];

function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("Todo");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    selectedFilter === "Todo"
      ? projectsData
      : projectsData.filter((p) => p.tech.includes(selectedFilter));

  const openModal = (title, images) => {
    setModalTitle(title);
    setModalImages(images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === modalImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="projects" id="projects">
      <h2>Mis Proyectos</h2>
      <p>
        Una selección de mi trabajo reciente. Explora las demos en vivo y el
        código fuente para ver mis habilidades en acción.
      </p>

      <div className="filters">
        {techFilters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${
              selectedFilter === filter ? "active" : ""
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <div className="tags">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="buttons">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <button className="btn-demo">Ver Demo</button>
                  </a>
                ) : project.images ? (
                  <button
                    className="btn-demo"
                    onClick={() => openModal(project.title, project.images)}
                  >
                    Ver Ahora
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Slider */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalTitle}</h3>
            <div className="modal-slider">
              <button className="slider-btn prev" onClick={prevImage}>
                &#10094;
              </button>
              <img
                src={modalImages[currentIndex]}
                alt={`${modalTitle} ${currentIndex + 1}`}
              />
              <button className="slider-btn next" onClick={nextImage}>
                &#10095;
              </button>
            </div>
            <p className="slider-counter">
              {currentIndex + 1} / {modalImages.length}
            </p>
            <button className="modal-close" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
