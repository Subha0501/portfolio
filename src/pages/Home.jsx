import React from 'react';
import './Home.css';
import profileImg from '../assets/profile.jpg'; // adjust filename if different

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro-section">
        <img src={profileImg} alt="Profile" className="profile-image" />
        <div className="intro-text">
          <h1>SUBHA SREE CHINNUSAMY</h1>
          <h2>I am a final year B.Tech IT student</h2>
          <p>M.Kumarasamy College of Engineering</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
