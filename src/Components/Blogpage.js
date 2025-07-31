import React, { useEffect, useRef, useState } from "react";
import "./Blogpage.css";
import { FaComment, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const blogs = [
  {
    image: "/Images/vegbowl.jpg",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no <br/> control about the blind texts",
    excerpt:
      "Far far away, behind the word mountains, far from the <br/>countries Vokalia and Consonantia, there live the blind  <br/>texts.",
  },
  {
    image: "/Images/peas.jpg",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no <br/>control about the blind texts",
    excerpt:
      "Far far away, behind the word mountains, far from the<br/> countries Vokalia and Consonantia, there live the blind  <br/>texts.",
  },
  {
    image: "/Images/chefs.jpg",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no<br/> control about the blind texts",
    excerpt:
      "Far far away, behind the word mountains, far from the <br/>countries Vokalia and Consonantia, there live the blind  <br/>texts.",
  },
  {
    image: "/Images/vegdish.jpg",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no <br/>control about the blind texts",
    excerpt:
      "Far far away, behind the word mountains, far from the<br/> countries Vokalia and Consonantia, there live the blind  <br/>texts.",
  },
  {
    image: "/Images/vegmarket.jpg",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no<br/> control about the blind texts",
    excerpt:
      "Far far away, behind the word mountains, far from the <br/>countries Vokalia and Consonantia, there live the blind  <br/>texts.",
  },

  {
    image: "/Images/salad.jpg",
    date: "July 20, 2019",
    author: "Admin",
    comments: 3,
    title:
      "Even the all-powerful Pointing has no<br/> control about the blind texts",
    excerpt:
      "Far far away, behind the word mountains, far from the <br/>countries Vokalia and Consonantia, there live the blind  <br/>texts.",
  },
];

const Blogpage = () => {
  const navigate = useNavigate();
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 100);
      console.log(scrolledDown);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledDown]);

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
          <h3 style={{ marginTop: "8%", marginBottom: "10%" }}>HOME BLOG</h3>
          <h1>BLOG</h1>
        </div>
      </section>

      {/*Blog Section */}

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-left">
            {blogs.map((blog, index) => (
              <div className="blog-card" key={index}>
                <img src={blog.image} alt="blog" className="blog-image" />
                <div className="blog-content">
                  <p className="blog-meta">
                    {blog.date} &nbsp; {blog.author} &nbsp;
                    <FaComment size={12} /> &nbsp;{blog.comments}
                  </p>

                  <h3
                    className="blog-title"
                    dangerouslySetInnerHTML={{ __html: blog.title }}
                  ></h3>

                  <p
                    className="blog-excerpt"
                    dangerouslySetInnerHTML={{ __html: blog.excerpt }}
                  ></p>

                  <button
                    className="read-more"
                    onClick={() => navigate("/readmore")}
                  >
                    Read more <FaChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="blog-right">
            <input
              type="text"
              className="blog-search"
              placeholder="Search..."
            />

            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li>
                  Vegetables <span>(12)</span>
                </li>
                <li>
                  Fruits <span>(22)</span>
                </li>
                <li>
                  Juice <span>(37)</span>
                </li>
                <li>
                  Dries <span>(42)</span>
                </li>
              </ul>
            </div>

            <div className="recent-blog">
              <h4>Recent Blog</h4>
              <div className="recent-item">
                <img src={blogs[0].image} alt="recent" />
                <div>
                  <p className="recent-title">
                    Even the all-powerful <br /> Pointing has no <br /> control
                    about the
                    <br /> blind texts
                  </p>
                  <p className="blog-meta-small">
                    📅 April 09, 2019 &nbsp; 👤 Admin &nbsp; 💬 19
                  </p>
                </div>
              </div>

              <div className="recent-item">
                <img src={blogs[1].image} alt="recent" />
                <div>
                  <p className="recent-title">
                    Even the all-powerful <br /> Pointing has no <br /> control
                    about the
                    <br /> blind texts
                  </p>
                  <p className="blog-meta-small">
                    📅 April 09, 2019 &nbsp; 👤 Admin &nbsp; 💬 19
                  </p>
                </div>
              </div>

              <div className="recent-item">
                <img src={blogs[2].image} alt="recent" />
                <div>
                  <p className="recent-title">
                    Even the all-powerful <br /> Pointing has no <br /> control
                    about the
                    <br /> blind texts
                  </p>
                  <p className="blog-meta-small">
                    📅 April 09, 2019 &nbsp; 👤 Admin &nbsp; 💬 19
                  </p>
                </div>
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="tag-paragraph-section">
              <div className="tag-cloud">
                <h4>Tag Cloud</h4>
                <div className="tags">
                  {[
                    "FRUITS",
                    "TOMATOE",
                    "MANGO",
                    "APPLE",
                    "CARROTS",
                    "ORANGE",
                    "PEPPER",
                    "EGGPLANT",
                  ].map((tag, index) => (
                    <React.Fragment key={index}>
                      {tag === "CARROTS" || tag === "EGGPLANT" ? (
                        <>
                          {tag === "CARROTS" && (
                            <div style={{ width: "100%" }} />
                          )}
                          {tag === "EGGPLANT" && (
                            <div style={{ width: "100%" }} />
                          )}
                        </>
                      ) : null}
                      <span className="tag-item" onClick={scrollToTop}>
                        {tag}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Paragraph */}
              <div className="paragraph-section">
                <h4>Paragraph</h4>
                <p>
                  Lorem ipsum dolor sit amet
                  <br />, consectetur adipisicing elit. Ducimus <br />
                  itaque, autem necessitatibus voluptate
                  <br /> quod mollitia delectus aut, sunt placeat <br />
                  nam vero culpa sapiente consectetur
                  <br /> similique, inventore eos fugit cupiditate
                  <br /> numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer Secttion */}

      <footer className="footer" style={{ backgroundColor: "#f7f5f0" }}>
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
                <span
                  onClick={scrollToTop}
                  style={{ backgroundColor: "#e7e3d9ff" }}
                >
                  <FaTwitter />
                </span>
                <span
                  onClick={scrollToTop}
                  style={{ backgroundColor: "#e7e3d9ff" }}
                >
                  <FaFacebookF />
                </span>
                <span
                  onClick={scrollToTop}
                  style={{ backgroundColor: "#e7e3d9ff" }}
                >
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

        <div className="scroll-top-button2" onClick={scrollToTop}>
          <span className="bounce-icon2">
            <FaChevronUp />
          </span>
        </div>
      </footer>
    </>
  );
};

export default Blogpage;
