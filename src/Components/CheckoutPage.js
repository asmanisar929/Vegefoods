import React, { useEffect, useRef, useState } from "react";
import "./CheckoutPage.css";
import { FaChevronUp } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const CheckoutPage = () => {
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
      <section className="shop-hero" id="hero-section2">
        <div className="shop-overlay">
          <h3 style={{ marginTop: "8%", marginBottom: "10%" }}>
            HOME CHECKOUT
          </h3>
          <h1>CHECKOUT</h1>
        </div>
      </section>

      {/*Checkout*/}
      <div className="main-wrapper">
        <div className="checkout-container">
          {/* Left Side - Billing Details */}
          <div className="billing-section">
            <h2>Billing Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Firt Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" />
              </div>

              <div className="form-group full-width">
                <label>State / Country</label>
                <select>
                  <option style={{ color: "#999999" }}>France</option>
                  <option>Italy</option>
                  <option>Philippines</option>
                  <option>South Korea</option>
                  <option>Hong Kong</option>
                  <option>Japan</option>
                </select>
              </div>

              <div className="form-group">
                <label>Street Address</label>
                <input type="text" placeholder="House number and street name" />
              </div>
              <div className="form-group">
                <label>&nbsp;</label>
                <input
                  type="text"
                  placeholder="Appartment, suite, unit etc: (optional)"
                />
              </div>

              <div className="form-group">
                <label>Town / City</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Postcode / ZIP *</label>
                <input type="text" />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" />
              </div>
            </div>

            <div className="options-row">
              <label>
                <input type="radio" name="account" /> Create an Account?
              </label>
              <label>
                <input type="radio" name="account" /> Ship to different address
              </label>
            </div>
          </div>

          {/* Right Side - Cart Summary and Payment */}
          <div className="summary-section">
            <div className="cart-total-box">
              <h3 style={{ color: "black" }}>Cart Total</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>$20.60</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span>$0.00</span>
              </div>
              <div className="summary-row">
                <span>Discount</span>
                <span>$3.00</span>
              </div>
              <hr />
              <div className="summary-row total">
                <span>TOTAL</span>
                <span style={{ color: "black" }}>$17.60</span>
              </div>
            </div>

            <div className="payment-method-box">
              <h3 style={{ color: "black" }}>Payment Method</h3>
              <label>
                <input type="radio" name="payment" /> Direct Bank Transfer
              </label>
              <br />
              <label>
                <input type="radio" name="payment" /> Check Payment
              </label>
              <br />
              <label>
                <input type="radio" name="payment" /> Paypal
              </label>
              <br />
              <label>
                <input type="checkbox" /> I have read and accept the terms and
                conditions
              </label>

              <button className="place-order-btn" onClick={scrollToTop}>
                Place an order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter*/}

      <section className="newsletter-wrapper">
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>Subscribe to our Newsletter</h2>
              <p>
                Get e-mail updates about our latest shops and special offers
              </p>
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

      {/*Footer*/}

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
    </>
  );
};

export default CheckoutPage;
