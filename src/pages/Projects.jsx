import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
    
      <div className="project-card">
        <h2>Library Management System</h2>
        <p>A web app to manage librarian tasks, track book status, and assigning books. Built using React.</p>
        <a href="https://github.com/Subha0501" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>

      <div className="project-card">
        <h2>Online Voting System</h2>
        <p>A secure and user-friendly voting platform used in colleges, schools to have a mini election to determine the class representative, college student council members etc., using Node.js, Express, and MongoDB. Includes admin and voter login.</p>
        <a href="https://github.com/Subha0501" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>

      <div className="project-card">
        <h2>Weather Forecast App</h2>
        <p>This project displays real-time weather data for any city and analyzes temperature to determine the weather using OpenWeatherMap API. Built with HTML, CSS, JavaScript.</p>
        <a href="https://github.com/Subha0501" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>

      <div className="project-card">
        <h2>IOT Powered Pollution Detection and Analyzing System</h2>
        <p>This project displays real-time air quality and environmental metrics using sensors and AI to detect pollution levels.</p>
        <a href="https://github.com/Subha0501" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>

      <div className="project-card">
        <h2>Multilingual Language Translation with Machine Learning</h2>
        <p>This browser extension translates languages into multiple target languages and also supports image translation. Built with HTML, CSS, JavaScript, and Machine Learning models.</p>
        <a href="https://github.com/Subha0501" target="_blank" rel="noreferrer">View on GitHub</a>
      </div>

    </div> 
  );
};

export default Projects;
