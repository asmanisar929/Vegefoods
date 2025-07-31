import React, { useEffect, useRef, useState } from "react";
import "./CartPage.css";
import { FaChevronUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
    name: "Fresh Beans",
    price: 15.7,
    quantity: 1,
    image: "/Images/beans.jpg",
  },
  {
    id: 2,
    name: "Cabbage",
    price: 15.7,
    quantity: 1,
    image: "/Images/Cabbage.jpg",
  },
];

const CartPage = () => {
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

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <>
      <section className="shop-hero" id="hero-section2">
        <div className="shop-overlay">
          <h3 style={{ marginTop: "8%", marginBottom: "10%" }}>HOME CART</h3>
          <h1>MY CART</h1>
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

      {/*Cart Section */}

      <div className="cart-container">
        {/* Coupon Code Section */}
        <div className="cart-column">
          <div className="cart-box">
            <h3>Coupon Code</h3>
            <p>Enter your coupon code if you have one</p>
            <label>Coupon code</label>
            <input type="text" className="input-field" />
          </div>
          <button className="green-btn1" onClick={handleCheckout}>
            Apply Coupon
          </button>
        </div>

        {/* Estimate Shipping and Tax */}
        <div className="cart-column">
          <div className="cart-box">
            <h3>Estimate shipping and tax</h3>
            <p>Enter your destination to get a shipping estimate</p>
            <label>Country</label>
            <input type="text" className="input-field" />
            <label>State/Province</label>
            <input type="text" className="input-field" />
            <label>Zip/Postal Code</label>
            <input type="text" className="input-field" />
          </div>
          <button className="green-btn2" onClick={handleCheckout}>
            Estimate
          </button>
        </div>

        {/* Cart Totals */}
        <div className="cart-column">
          <div className="cart-box">
            <h3>Cart Totals</h3>
            <div className="totals-row">
              <span>Subtotal</span>
              <span>$20.60</span>
            </div>
            <div className="totals-row">
              <span>Delivery</span>
              <span>$0.00</span>
            </div>
            <div className="totals-row">
              <span>Discount</span>
              <span>$3.00</span>
            </div>
            <hr />
            <div className="totals-row bold">
              <span>TOTAL</span>
              <span style={{ color: "black" }}>$17.60</span>
            </div>
          </div>
          <button className="green-btn3" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/*NewsLetter*/}

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

export default CartPage;
