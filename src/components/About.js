import React from 'react';
import './About.css';

function AboutGoMyno() {
  return (
    <section className="about-gomyno" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src="./gomyno_team.jpg" alt="Go Myno Team" />
        </div>
        <div className="about-text">
          <h2 className="about-title">About Go Myno</h2>
          <p className="about-description">
            Go Myno is the premier technical club of IIT, dedicated to fostering innovation and growth among coders, developers, and tech enthusiasts. Our community thrives on collaboration, pushing the boundaries of creativity and technical expertise. From beginner workshops to advanced coding sessions, Go Myno is the place where technology meets passion.
          </p>
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet magna vel orci tempor vulputate. Fusce in felis nec lacus gravida scelerisque. Cras malesuada mi sit amet ante tincidunt tincidunt. Suspendisse potenti. 
          </p>
          <p className="about-description">
            Whether you're looking to expand your coding skills, participate in hackathons, or collaborate on innovative projects, Go Myno offers a platform that supports and empowers the next generation of tech leaders.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutGoMyno;
