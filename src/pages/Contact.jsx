import React from 'react';
import { FaEnvelope, FaGithub, FaPhoneAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-info-container">
      <h1>Contact Me</h1>
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <a href="mailto:subha17.2005@gmail.com">subha17.2005@gmail.com</a>
      </div>
      <div className="contact-item">
        <FaPhoneAlt className="contact-icon" />
        <span>+91 9443033092</span>
      </div>
      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <a href="https://github.com/Subha0501" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div className="contact-item">
        <FaInstagram className="contact-icon" />
        <a href="https://www.instagram.com/light_in_dark_01_17_/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a href="https://www.linkedin.com/in/subha-sree-021413255/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
