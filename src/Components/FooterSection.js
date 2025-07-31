import React, { useEffect, useRef, useState } from "react";
import "./FooterSection.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Vegefoods</h3>
          <p>
            Far far away, behind the word mountains, far from the <br />
            countries Vokalia and <br />
            Consonantia.
          </p>
          <div classNam="icon-container" ref={sectionRef}>
            <div className={`footer-icons ${animate ? "animate" : ""}`}>
              <span onClick={scrollToTop}>
                <FaTwitter />
              </span>
              <span onClick={scrollToTop}>
                <FaFacebookF />
              </span>
              <span onClick={scrollToTop}>
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Menu</h3>
          <ul>
            <li onClick={scrollToTop}>Shop</li>
            <li onClick={scrollToTop}>About</li>
            <li onClick={scrollToTop}>Journal</li>
            <li onClick={scrollToTop}>Contact Us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Help</h3>
          <div className="help-list">
            <ul>
              <li onClick={scrollToTop}>Shipping Information</li>
              <li onClick={scrollToTop}>Returns & Exchange</li>
              <li onClick={scrollToTop}>Terms & Conditions</li>
              <li onClick={scrollToTop}>Privacy Policy</li>
            </ul>
            <ul>
              <li onClick={scrollToTop}>FAQs</li>
              <li onClick={scrollToTop}>Contact</li>
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Have a Questions?</h3>
          <ul className="footer-contact">
            <li className="address" onClick={scrollToTop}>
              <FaMapMarkerAlt /> 203 Fake St. Mountain
              <br /> View, San Francisco,
              <br /> California, USA
            </li>
            <li onClick={scrollToTop}>
              <FaPhone /> +2 392 3929 210
            </li>
            <li onClick={scrollToTop}>
              <FaEnvelope /> info@yourdomain.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with{" "}
          <span className="heart">♥</span> by{" "}
          <span
            className="colorlib"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          >
            Colorlib
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
