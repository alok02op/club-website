import React from 'react';
import './Events.css';

function Events() {
  const events = [
    {
      title: 'Game of Codes',
      description: 'Intra-college Competitive Programming Contest.',
      img: '/event1.jpeg' 
    },
    {
      title: 'ICPC Guidance Session',
      description: 'Preparing for the prestigious ICPC contest.',
      img: '/event2.jpeg' 
    },
    {
      title: 'Coding Challenges',
      description: 'Monthly competitive coding events.',
      img: '/event3.avif'
    }
  ];

  return (
    <section className="events" id="events">
      <h2 className="events-title">Our Events</h2>
      <div className="event-cards">
        {events.map((event, index) => (
          <div className="card" key={index}>
            <img src={event.img} alt={event.title} className="event-image" />
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;