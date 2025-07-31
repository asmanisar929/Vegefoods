import React, { useEffect, useRef, useState } from "react";
import "./FeaturesSection.css";
import { FaShippingFast, FaLeaf, FaMedal, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={36} color="#fff" />,
    title: "FREE SHIPPING",
    subtitle: "ON ORDER OVER $100",
    bgColor: "#DCA9D1",
  },
  {
    icon: <FaLeaf size={36} color="#fff" />,
    title: "ALWAYS FRESH",
    subtitle: "PRODUCT WELL PACKAGE",
    bgColor: "#E3C98B",
  },
  {
    icon: <FaMedal size={36} color="#fff" />,
    title: "SUPERIOR QUALITY",
    subtitle: "QUALITY PRODUCTS",
    bgColor: "#A7D3E8",
  },
  {
    icon: <FaHeadset size={36} color="#fff" />,
    title: "SUPPORT",
    subtitle: "24/7 SUPPORT",
    bgColor: "#DCD38A",
  },
];

const FeaturesSection = () => {
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
    <div className="features-container" ref={sectionRef}>
      {features.map((feature, index) => (
        <div className={`feature-item ${animate ? "animate" : ""}`} key={index}>
          <div
            className="feature-icon"
            style={{ backgroundColor: feature.bgColor }}
          >
            <div className="icon-wrapper">{feature.icon}</div>
          </div>

          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-subtitle">{feature.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
