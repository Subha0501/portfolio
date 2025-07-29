import resumePDF from '../assets/resume.pdf';

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        I'm a passionate web developer with experience in building responsive and dynamic websites using React.js.
        I love turning ideas into reality through clean and maintainable code.
      </p>
      <section className="about-section">
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech Information Technology</strong>, M. Kumarasamy College of Engineering (2022–2026), Karur</li>
          <li><strong>HSC</strong>, R.K.V. Matric Hr. Sec. School (2021–2022), Namakkal</li>
          <li><strong>SSLC</strong>, R.K.V. Matric Hr. Sec. School (2020–2021), Namakkal</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Languages Known</h2>
        <ul>
          <li>English</li>
          <li>Tamil</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Course Certifications</h2>
        <ul>
          <li>AI Foundation – Oracle Infrastructure</li>
          <li>Junior Cybersecurity Analyst Career Path – Cisco</li>
          <li>Introduction to Data Science – Cisco</li>
          <li>JavaScript Essentials 1 – Cisco</li>
          <li>Industry 4.0 – NPTEL (Elite Badge)</li>
          <li>Step First Plus Test – Certified</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Hobbies</h2>
        <ul>
          <li>Designing Craft Work</li>
          <li>Drawing</li>
          <li>Listening to Music</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Area of Interest</h2>
        <ul>
          <li>Creative Work</li>
          <li>Designing Work</li>
        </ul>
      </section>

      <div className="resume-download">
  <a href={resumePDF} download="Subha_Sree_Resume.pdf" className="download-btn">
    📄 Download Resume
  </a>
</div>


    </div>
  );
};

export default About;
