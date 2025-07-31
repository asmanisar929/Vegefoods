import React, { useEffect, useRef, useState } from "react";
import "./WishlistPage.css";
import { FaChevronUp } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Bell Pepper",
    price: 4.9,
    quantity: 1,
    image: "/Images/Capsicum.jpg",
  },
  {
    id: 2,
    name: "Strawberry",
    price: 15.7,
    quantity: 1,
    image: "/Images/strawberries.jpg",
  },
  {
    id: 3,
    name: "Fresh Beans",
    price: 15.7,
    quantity: 1,
    image: "/Images/beans.jpg",
  },
  {
    id: 4,
    name: "Cabbage",
    price: 15.7,
    quantity: 1,
    image: "/Images/Cabbage.jpg",
  },
  {
    id: 5,
    name: "Tomato",
    price: 15.7,
    quantity: 1,
    image: "/Images/tomatoes.jpg",
  },
  {
    id: 6,
    name: "Broccoli",
    price: 15.7,
    quantity: 1,
    image: "/Images/Brocoli.jpg",
  },
];

const WishlistPage = () => {
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
            HOME WISHLIST
          </h3>
          <h1>MY WISHLIST</h1>
        </div>
      </section>

      {/* ProductList*/}

      <div className="product-section">
        <table className="product-table">
          <thead>
            <tr>
              <th colSpan="2">
                <span className="Product">Product List</span>
              </th>
              <th>
                <span className="Price">Price</span>
              </th>
              <th>
                <span className="Quantity">Quantity</span>
              </th>
              <th>
                {" "}
                <span className="Total">Total</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td className="remove-cell">
                  <button className="remove-btn" onClick={scrollToTop}>
                    ×
                  </button>
                </td>
                <td className="product-info">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      Far far away, behind the word mountains,
                      <br />
                      far from the countries
                    </p>
                  </div>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input type="number" defaultValue={item.quantity} min="1" />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*Newsletter*/}

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

      {/*Footer section */}

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

export default WishlistPage;
