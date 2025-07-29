import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import Navbar from './components/Navbar';
import bg from './assets/bg.jpg';



function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      {/* 🟦 Overlay */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // semi-transparent black
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <Router>
          <Navbar />
          <div style={{ padding: '2rem' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
