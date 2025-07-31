import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const slides = [
  {
    image: "/Images/hero1.jpg",
    heading: "We Serve Fresh Vegetables & <br/>Fruits",
    sub: "We deliver organic vegetables & fruits",
  },
  {
    image: "/Images/hero.jpg",
    heading: "100% FRESH AND ORGANIC FOODS",
    sub: "We deliver organic vegetables & fruits",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero-section">
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1
            className="slide-text"
            dangerouslySetInnerHTML={{ __html: slides[current].heading }}
          ></h1>

          <p>{slides[current].sub}</p>
          <button>View Details</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
