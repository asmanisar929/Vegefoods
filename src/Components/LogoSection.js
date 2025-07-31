import React, { useEffect, useRef, useState } from "react";
import "./LogoSection.css"; // make sure this file is created

const LogoSection = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Logo-container" ref={sectionRef}>
      <section className={`logo-section ${animate ? "animate" : ""}`}>
        <img
          src="https://preview.colorlib.com/theme/vegefoods/images/partner-1.png.webp"
          alt="Microsoft"
          onClick={scrollToTop}
        />
        <img
          src="https://preview.colorlib.com/theme/vegefoods/images/partner-2.png.webp"
          alt="Android"
          onClick={scrollToTop}
        />
        <img
          src="https://preview.colorlib.com/theme/vegefoods/images/partner-3.png.webp"
          alt="Java"
          onClick={scrollToTop}
        />
        <img
          src="https://preview.colorlib.com/theme/vegefoods/images/partner-4.png.webp"
          alt="Google"
          onClick={scrollToTop}
        />
        <img src="/Images/Adobe.png" alt="Adobe" onClick={scrollToTop} />
      </section>
    </div>
  );
};

export default LogoSection;
