// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import CoreTeam from './components/CoreTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <CoreTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
