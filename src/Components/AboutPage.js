import React, { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import { FaShippingFast, FaLeaf, FaMedal, FaHeadset } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Garreth Smith",
    role: "SYSTEM ANALYST",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img1.jpg",
  },
  {
    name: "Garreth Smith",
    role: "MARKETING MANAGER",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img1.jpg",
  },
  {
    name: "Garreth Smith",
    role: "INTERFACE DESIGNER",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img2.jpg",
  },
  {
    name: "Garreth Smith",
    role: "UI DESIGNER",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img3.jpg",
  },
  {
    name: "Garreth Smith",
    role: "WEB DEVELOPER",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "/Images/img1.jpg",
  },
];

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

const AboutPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [scrolledDown, setScrolledDown] = useState(false);

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

    return () => {
      // if (sectionRef.current) {
      //   // observer.unobserve(sectionRef.current);
      // }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const duration = 5000; // All counters finish in 3 seconds

  const [counts, setCounts] = useState({
    customers: 1000,
    branches: 1,
    partners: 1,
    awards: 1,
  });

  useEffect(() => {
    const start = {
      customers: 1000,
      branches: 1,
      partners: 1,
      awards: 1,
    };

    const end = {
      customers: 10000,
      branches: 100,
      partners: 1000,
      awards: 100,
    };

    const frameRate = 30;
    const steps = duration / frameRate;

    const increments = {
      customers: (end.customers - start.customers) / steps,
      branches: (end.branches - start.branches) / steps,
      partners: (end.partners - start.partners) / steps,
      awards: (end.awards - start.awards) / steps,
    };

    let current = { ...start };
    let stepCount = 0;

    const interval = setInterval(() => {
      stepCount++;
      current = {
        customers: Math.min(
          end.customers,
          Math.floor(start.customers + increments.customers * stepCount)
        ),
        branches: Math.min(
          end.branches,
          Math.floor(start.branches + increments.branches * stepCount)
        ),
        partners: Math.min(
          end.partners,
          Math.floor(start.partners + increments.partners * stepCount)
        ),
        awards: Math.min(
          end.awards,
          Math.floor(start.awards + increments.awards * stepCount)
        ),
      };
      setCounts({ ...current });

      if (stepCount >= steps) {
        clearInterval(interval);
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="shop-hero" id="hero-section">
        <div className="shop-overlay">
          <h3 style={{ marginTop: "8%", marginBottom: "10%" }}>
            HOME ABOUT US
          </h3>
          <h1>ABOUT US</h1>
        </div>
      </section>

      {/*Video Section*/}
      <section className="hero-sections-wrapper" ref={sectionRef}>
        <div className={`hero-sections ${animate ? "animate" : ""}`}>
          {/* Left: Image with Play Button */}
          <div className="hero-left">
            <img
              src="/Images/Vidimg.jpg"
              alt="Video Thumbnail"
              className="hero-thumbnail"
            />
            <button
              className="play-button"
              onClick={() => setIsVideoOpen(true)}
            >
              ▶
            </button>

            {isVideoOpen && (
              <div className="video-modal">
                <div className="video-container">
                  <iframe
                    src="/Images/vid.mp4"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Vimeo Video"
                  />

                  <button
                    className="close-button"
                    onClick={() => setIsVideoOpen(false)}
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Text Content */}
          <div className="hero-right">
            <h1>
              Welcome to Vegefoods an <br /> eCommerce website
            </h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p>
              But nothing the copy said could convince her and so it didn’t take
              long until a few insidious Copy Writers ambushed her, made her
              drunk with Longe and Parole and dragged her into their agency,
              where they abused her for their.
            </p>
            <button
              className={`shop-now ${scrolledDown ? "scrolled" : ""}`}
              onClick={scrollToTop}
            >
              Shop now
            </button>
          </div>
        </div>
      </section>

      {/*newsletter*/}

      <section className="newsletter-wrapper" style={{ marginTop: "-13%" }}>
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
      </section>

      {/* counter*/}

      <section className="counter-section">
        <div className="counter-bg">
          <div className="light-overlay"></div> {/* Light transparent layer */}
          <div className="counter-content">
            <div className="counter-item">
              <h2>{counts.customers.toLocaleString()}</h2>
              <p>HAPPY CUSTOMERS</p>
            </div>
            <div className="counter-item">
              <h2>{counts.branches}</h2>
              <p>BRANCHES</p>
            </div>
            <div className="counter-item">
              <h2>{counts.partners.toLocaleString()}</h2>
              <p>PARTNER</p>
            </div>
            <div className="counter-item">
              <h2>{counts.awards}</h2>
              <p>AWARDS</p>
            </div>
          </div>
        </div>
      </section>

      {/*Testimonial Section */}

      <div className="Testimonial-container" ref={sectionRef}>
        <section className={`testimonial-section ${animate ? "animate" : ""}`}>
          <p className="subtitle">Testimony</p>
          <h2 className="title">Our satisfied customer says</h2>
          <p className="desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>

          <div className="testimonials">
            <div
              className="testimonial-slider-track"
              style={{
                transform: `translateX(-${currentIndex * (300 + 40)}px)`,
              }}
            >
              {testimonials
                .concat(testimonials.slice(0, 3)) // allow smooth wrap for 3 at a time
                .map((t, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="image-wrapper">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="customer-img"
                      />
                      <div className="quote-icon">&#8220;</div>
                    </div>
                    <div className="testimonial-box">
                      <p>{t.text}</p>
                    </div>
                    <h4 className="customer-name">{t.name}</h4>
                    <p className="customer-role">{t.role}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="dots">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`dot ${currentIndex === i ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
              ></span>
            ))}
          </div>
          <hr className="testimonial-divider" />
        </section>
      </div>

      {/* Feature section */}
      <section className="features-wrapper">
        <div
          className="features-container"
          style={{ backgroundColor: "#f7f5f0", marginTop: "-4%" }}
          ref={sectionRef}
        >
          {features.map((feature, index) => (
            <div
              className={`feature-item ${animate ? "animate" : ""}`}
              key={index}
            >
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

        <div className="scroll-top-button1" onClick={scrollToTop}>
          <span className="bounce-icon1">
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
    </>
  );
};

export default AboutPage;
