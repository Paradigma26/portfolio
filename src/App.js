import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
