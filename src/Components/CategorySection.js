import React, { useEffect, useRef, useState } from "react";
import "./CategorySection.css";

const CategorySection = () => {
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
    <div className="category-container" ref={sectionRef}>
      <div className={`category-grid ${animate ? "animate" : ""}`}>
        {/* Column 1 */}
        <div className="category-card">
          <img
            src="/Images/vegbasket.jpg"
            alt="Fruits"
            className="category-img"
          />
          <span className="category-tag" onClick={scrollToTop}>
            Vegetables
          </span>
        </div>

        {/* Column 2 */}
        <div className="category-text">
          <h2>Vegetables</h2>
          <p>Protect the health of every home</p>
          <button className="shop-button" onClick={scrollToTop}>
            Shop now
          </button>
        </div>

        {/* Column 3 */}
        <div className="category-card">
          <img src="/Images/Juices.jpg" alt="Juices" className="category-img" />
          <span className="category-tag" onClick={scrollToTop}>
            Juices
          </span>
        </div>

        {/* Row 2 - Column 1 (under Fruits) */}
        <div className="category-card">
          <img
            src="/Images/Fruits.jpg"
            alt="Vegetables"
            className="category-img"
          />
          <span className="category-tag" onClick={scrollToTop}>
            Fruits
          </span>
        </div>

        <div className="category-card move-up-img">
          <img
            src="/Images/vegetables.jpg"
            alt="Basket"
            className="category-img"
          />
        </div>

        {/* Row 2 - Column 3 (under Juices) */}
        <div className="category-card">
          <img src="/Images/seeds.jpg" alt="Dried" className="category-img" />
          <span className="category-tag" onClick={scrollToTop}>
            Dried
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
