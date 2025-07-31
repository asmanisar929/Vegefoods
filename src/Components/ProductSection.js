import React, { useEffect, useRef, useState } from "react";
import "./ProductSection.css";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";

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
];

const ProductSection = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
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
    <div className="product-container1" ref={sectionRef}>
      <div className={`product-section ${animate ? "animate" : ""}`}>
        <p className="sub-title">Featured Products</p>
        <h2 className="title">Our Products</h2>
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
  );
};

export default ProductSection;
