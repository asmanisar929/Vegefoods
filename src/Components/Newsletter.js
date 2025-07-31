import React from "react";
import "./Newsletter.css";
import { FaChevronUp } from "react-icons/fa";

const Newsletter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="newsletter-wrapper">
      <div className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get e-mail updates about our latest shops and special offers</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="scroll-top-button" onClick={scrollToTop}>
        <span className="bounce-icon">
          <FaChevronUp />
        </span>
      </div>
    </section>
  );
};

export default Newsletter;
