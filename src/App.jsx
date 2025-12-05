import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import "./App.css";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
