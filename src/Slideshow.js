import React, { useState, useEffect } from 'react';
import './Slideshow.css'; 

const slides = [
  "https://res.cloudinary.com/dnxdqqci7/image/upload/v1723568752/qyijxda7v3kmhecbqyio.jpg", 
  "https://res.cloudinary.com/dnxdqqci7/image/upload/v1723568752/l7tye5qqvzlwpdh8c5yv.jpg", 
  "https://res.cloudinary.com/dnxdqqci7/image/upload/v1723568752/l7tye5qqvzlwpdh8c5yv.jpg",
  // Add more slides as needed
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(nextSlide, 3000); 

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(autoSlideInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="slideshow">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
