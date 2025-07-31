import React, { useEffect, useRef, useState } from "react";
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Garreth Smith",
    role: "SYSTEM ANALYST",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img1.jpg",
  },
  {
    name: "Garreth Smith",
    role: "MARKETING MANAGER",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img1.jpg",
  },
  {
    name: "Garreth Smith",
    role: "INTERFACE DESIGNER",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img2.jpg",
  },
  {
    name: "Garreth Smith",
    role: "UI DESIGNER",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img3.jpg",
  },
  {
    name: "Garreth Smith",
    role: "WEB DEVELOPER",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img1.jpg",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    /*return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };*/
  }, []);

  return (
    <div className="Testimonial-container" ref={sectionRef}>
      <section className={`testimonial-section ${animate ? "animate" : ""}`}>
        <p className="subtitle">Testimony</p>
        <h2 className="title">Our satisfied customer says</h2>
        <p className="desc">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in
        </p>

        <div className="testimonials">
          <div
            className="testimonial-slider-track"
            style={{ transform: `translateX(-${currentIndex * (300 + 40)}px)` }}
          >
            {testimonials
              .concat(testimonials.slice(0, 3)) // allow smooth wrap for 3 at a time
              .map((t, index) => (
                <div key={index} className="testimonial-card">
                  <div className="image-wrapper">
                    <img src={t.image} alt={t.name} className="customer-img" />
                    <div className="quote-icon">&#8220;</div>
                  </div>
                  <div className="testimonial-box">
                    <p>{t.text}</p>
                  </div>
                  <h4 className="customer-name">{t.name}</h4>
                  <p className="customer-role">{t.role}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="dots">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`dot ${currentIndex === i ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
        <hr className="testimonial-divider" />
      </section>
    </div>
  );
};

export default TestimonialSection;
