import React from 'react';
import './CoreTeam.css';

function CoreTeam() {
  const members = [
    { name: 'Parth Gupta', role: 'Secretary', description: 'Leader with a vision for innovation and excellence.', img: '/member1.png' }, 
    { name: 'Utsav Shah', role: 'Club Head', description: 'Passionate about coding and teamwork.', img: '/member1.png' }, 
    { name: 'Alok kumar', role: 'Member', description: 'Focused on community building and outreach.', img: '/member1.png' } 
  ];

  return (
    <section className="core-team" id="team">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-grid">
        {members.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.img} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoreTeam;
