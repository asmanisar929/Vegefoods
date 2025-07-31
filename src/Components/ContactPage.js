import React, { useEffect, useRef, useState } from "react";
import "./ContactPage.css";
import { FaChevronUp } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const ContactPage = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  console.log(scrolledDown);
  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="shop-hero" id="hero-section">
        <div className="shop-overlay">
          <h3 style={{ marginTop: "8%", marginBottom: "10%" }}>
            HOME CONTACT US
          </h3>
          <h1>CONTACT US</h1>
        </div>
      </section>

      {/*Contact */}

      <section class="contact-section">
        <div class="contact-container">
          <div class="info-cards">
            <div class="info-card">
              <p style={{ color: "gray" }}>
                <strong>Address :</strong>
                198 West 21th <br />
                Street, Suite 721 New York NY 10016
              </p>
            </div>
            <div class="info-card">
              <p>
                <strong style={{ color: "gray" }}>Phone:</strong>
                <a href="tel:+1235235598">+ 1235 2355 98</a>
              </p>
            </div>
            <div class="info-card">
              <p>
                <strong style={{ color: "gray" }}>Email:</strong>
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
            <div class="info-card">
              <p>
                <strong style={{ color: "gray" }}>Website :</strong>

                <a href="/">yoursite.com</a>
              </p>
            </div>
          </div>

          <div class="contact-map-form">
            <div class="map-container">
              <div class="map-error">
                <div class="icon">!</div>
                <h2>Oops! Something went wrong.</h2>
                <p>
                  This page didn't load Google Maps correctly. See the
                  JavaScript console for <br />
                  technical details.
                </p>
              </div>
            </div>

            <div class="contactpg">
              <form class="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button type="submit" onClick={scrollToTop}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*Footer Secttion */}

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

        <div className="scroll-top-button3" onClick={scrollToTop}>
          <span className="bounce-icon3">
            <FaChevronUp />
          </span>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;
