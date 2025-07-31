import React, { useEffect, useRef, useState } from "react";
import "./ShopPage.css";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const categories = ["All", "Vegetables", "Fruits", "Juice", "Dried"];

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
  {
    name: "TOMATO",
    image: "/Images/tomatoes.jpg",
    price: 120,
    salePrice: 80,
    discount: 30,
  },
  {
    name: "BROCCOLI",
    image: "/Images/Brocoli.jpg",
    price: 120,
    salePrice: 120,
  },
  {
    name: "CARROT",
    image: "/Images/Carrots.jpg",
    price: 120,
    salePrice: 120,
  },
  {
    name: "JUICE BOTTLES",
    image: "/Images/Freshjuices.jpg",
    price: 120,
    salePrice: 120,
  },

  {
    name: "ONION",
    image: "/Images/onion.jpg",
    price: 120,
    salePrice: 80,
    discount: 30,
  },

  {
    name: "APPLE",
    image: "/Images/apples.jpg",
    price: 120,
    salePrice: 120,
  },
  {
    name: "GARLIC",
    image: "/Images/garlic.jpg",
    price: 120,
    salePrice: 120,
  },
  {
    name: "CHILLI",
    image: "/Images/chilli.jpg",
    price: 120,
    salePrice: 120,
  },
];

const ShopPage = () => {
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

  const [activeCategory, setActiveCategory] = useState("All");

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section1");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      scrollToHero();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="shop-hero" id="hero-section1">
        <div className="shop-overlay">
          <h3>HOME PRODUCTS</h3>
          <h1>PRODUCTS</h1>
        </div>
      </section>

      {/* Category Menu */}
      <div className="category-menu">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-item ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className="product-container1"
        style={{ marginTop: "7%" }}
        ref={sectionRef}
      >
        <div className={`product-section ${animate ? "animate" : ""}`}>
          <div className="product-container" style={{ marginLeft: "-11%" }}>
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

      {/*Pagination*/}

      <div className="pagination">
        <button
          className="page-button"
          onClick={() => handleClick(currentPage - 1)}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="page-button"
          onClick={() => handleClick(currentPage + 1)}
        >
          &gt;
        </button>
      </div>

      {/* NewsLetter Section */}

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

export default ShopPage;
