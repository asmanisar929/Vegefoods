import React, { useEffect, useRef, useState } from "react";
import "./DealSection.css";

const DealSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-31T23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

    /* return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };*/
  }, []);

  return (
    <section className="deal-section" ref={sectionRef}>
      <div className="deal-image" />
      <div className={`deal-content ${animate ? "animate" : ""}`}>
        <p className="deal-subtitle">Best Price For You</p>
        <h2 className="deal-title">Deal of the day</h2>
        <p className="deal-description">
          Far far away, behind the word mountains, far from the countries
          Vokalia
          <br /> and Consonantia
        </p>
        <h3 className="deal-product">Spinach</h3>
        <p className="deal-price">
          <span className="original-price">$10</span>{" "}
          <span className="discounted-price">now $5 only</span>
        </p>

        <div className="deal-timer">
          <div>
            <h4>{timeLeft.days}</h4>
            <span>DAYS</span>
          </div>
          <div>
            <h4>{timeLeft.hours}</h4>
            <span>HOURS</span>
          </div>
          <div>
            <h4>{timeLeft.minutes}</h4>
            <span>MINUTES</span>
          </div>
          <div>
            <h4>{timeLeft.seconds}</h4>
            <span>SECONDS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
