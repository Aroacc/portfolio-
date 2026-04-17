import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/footer";
import "./App.css";
import TechSection from "./components/Tech/TechSection";
import Cursor from "./components/cursor/Cursor";

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,      
      offset: 100  
    });
  }, []);

  return (
    <div className="App">
      <Cursor />   
      <Navbar />
      <Hero />
      <About />
      <Skills />
        <TechSection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
