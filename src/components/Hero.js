import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const quotes = [
      "Empowering coders of tomorrow.",
      "Innovate, Code, Transform.",
      "Where creativity meets technology.",
      "Shaping the future with code."
    ];

    const handleTyping = () => {
      const fullText = quotes[quoteIndex];

      if (isDeleting) {
        setDisplayedText(prev => fullText.substring(0, prev.length - 1));
        setSpeed(100);
      } else {
        setDisplayedText(prev => fullText.substring(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }
    };

    const typingEffect = setTimeout(handleTyping, speed);
    return () => clearTimeout(typingEffect);
  }, [displayedText, isDeleting, speed, quoteIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Go Myno</h1>
        <p className="hero-subtitle">The technical hub of IIT, empowering the next generation of innovators and coders!</p>
        <p className="quote-text">{displayedText}<span className="cursor">|</span></p>
      </div>
    </section>
  );
}

export default Hero;