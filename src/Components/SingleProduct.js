import React, { useEffect, useRef, useState } from "react";
import "./SingleProduct.css";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
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
    name: "BELL PEPPER",
    image: "/Images/Capsicum.jpg",
    price: 120,
    salePrice: 80,
    discount: 30,
  },
  {
    name: "STRAWBERRY",
    image: "/Images/strawberries.jpg",
    price: 120,
    salePrice: 120,
  },
  {
    name: "GREEN BEANS",
    image: "/Images/beans.jpg",
    price: 120,
    salePrice: 120,
  },
  {
    name: "PURPLE CABBAGE",
    image: "/Images/Cabbage.jpg",
    price: 120,
    salePrice: 120,
  },
];

const SingleProduct = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section4");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

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

  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate("/cartpage");
  };

  return (
    <>
      <section className="shop-hero" id="hero-section4">
        <div className="shop-overlay">
          <h3 style={{ marginTop: "8%", marginBottom: "10%" }}>
            HOME PRODUCT PRODUCT SINGLE
          </h3>
          <h1>PRODUCT SINGLE</h1>
        </div>
      </section>
      {/*Single Product*/}
      <section classname="singProd" ref={sectionRef}>
        <div className={`product-container ${animate ? "animate" : ""}`}>
          <div className="product-image">
            <img src="/Images/Capsicum.jpg" alt="Bell Pepper" />
          </div>

          <div className="product-info">
            <h1 className="product-title">Bell Pepper</h1>

            <div className="rating-row">
              <span className="rating-green" onClick={scrollToTop}>
                5.0
              </span>
              <span className="stars" onClick={scrollToTop}>
                ☆☆☆☆☆
              </span>
              <span className="rating-black" onClick={scrollToTop}>
                100
              </span>{" "}
              <span className="rating-gray" onClick={scrollToTop}>
                Rating
              </span>
              <span className="rating-black" onClick={scrollToTop}>
                500
              </span>{" "}
              <span className="rating-gray" onClick={scrollToTop}>
                Sold
              </span>
            </div>

            <div className="product-price">$120.00</div>

            <p className="product-desc">
              A small river named Duden flows by their place and supplies it
              with
              <br /> the necessary regelialia. It is a paradisematic country, in
              which
              <br /> roasted parts of sentences fly into your mouth. Text should
              turn
              <br /> around and return to its own, safe country. But nothing the
              copy
              <br /> said could convince her and so it didn’t take long until.
            </p>

            <select className="size-select">
              <option>SMALL</option>
              <option>MEDIUM</option>
              <option>LARGE</option>
              <option>EXTRA LARGE</option>
            </select>

            <div className="quantity-row">
              <button onClick={decrease}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={increase}>+</button>
            </div>

            <div className="stock-text">600 kg available</div>

            <button className="cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      {/*Product Section*/}
      <div
        className="product-container1"
        style={{ marginTop: "5%" }}
        ref={sectionRef}
      >
        <div className={`product-section ${animate ? "animate" : ""}`}>
          <p className="sub-title">Products</p>
          <h2 className="title">Related Products</h2>
          <p className="description">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>

          <div className="product-container" style={{ marginLeft: "-12%" }}>
            <div className="product-grid">
              {products.map((product, index) => (
                <div className="product-card" key={index}>
                  {product.discount && (
                    <div className="discount-badge">{product.discount}%</div>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />

                  <h3 className="product-name">{product.name}</h3>

                  <div className="price">
                    {product.salePrice < product.price ? (
                      <>
                        <span className="old-price">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="sale-price">
                          ${product.salePrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="sale-price">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Hover icons section */}
                  <div className="hover-icons">
                    <div className="icon-button" onClick={scrollToHero}>
                      <FaBars />
                    </div>
                    <div className="icon-button" onClick={scrollToHero}>
                      <FaShoppingCart />
                    </div>
                    <div className="icon-button" onClick={scrollToHero}>
                      <FaHeart />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
      {/*Footer Section */}
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
    </>
  );
};

export default SingleProduct;
