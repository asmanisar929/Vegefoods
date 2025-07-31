import React, { useEffect, useRef, useState } from "react";
import "./AboutPage.css";
import { FaChevronUp } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const AboutPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="shop-hero" id="hero-section2">
        <div className="shop-overlay">
          <h3 style={{ marginTop: "8%", marginBottom: "10%" }}>
            HOME ABOUT US
          </h3>
          <h1>ABOUT US</h1>
        </div>
      </section>

      {/*Video Section*/}

      <section className="hero-section">
        {/* Left: Image with Play Button */}
        <div className="hero-left">
          <img
            src="/Images/Vidimg.jpg"
            alt="Video Thumbnail"
            className="hero-thumbnail"
          />
          <button className="play-button" onClick={() => setIsVideoOpen(true)}>
            ▶
          </button>

          {isVideoOpen && (
            <div className="video-modal">
              <div className="video-container">
                <video controls autoPlay>
                  <source
                    src="https://vimeo.com/45830194?share=copy"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
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
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </p>
          <button className="shop-now">Shop now</button>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
