import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';


function App() {
  return (
    <div className="App">
      {/* Dynamic Background Ambient Shapes */}
      <div className="ambient-shape shape-1"></div>
      <div className="ambient-shape shape-2"></div>
      <div className="ambient-shape shape-3"></div>

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
