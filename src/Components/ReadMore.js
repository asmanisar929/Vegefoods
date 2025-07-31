import React, { useEffect, useRef, useState } from "react";
import "./ReadMore.css";
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
  },
  {
    image: "/Images/peas.jpg",
  },
  {
    image: "/Images/chefs.jpg",
  },
  {
    image: "/Images/cutdish.jpg",
  },
  {
    image: "/Images/vegmarket.jpg",
  },

  {
    image: "/Images/salad.jpg",
  },
];

const ReadMore = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  console.log(scrolledDown);

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

      {/*Readmore*/}

      <section className="blog-section">
        <div className="blog-container">
          <div className="ReadMore-left">
            <h2>Organic foods is good for your health</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, eius mollitia suscipit,
              <br /> quisquam doloremque distinctio perferendis et doloribus
              unde architecto optio laboriosam porro
              <br />
              adipisci sapiente officiis nemo accusamus ad praesentium? Esse
              minima nisi et. Dolore
              <br /> perferendis, enim praesentium omnis, iste doloremque quia
              officia optio deserunt molestiae <br />
              voluptates soluta architecto tempora.
            </p>
            <img
              src="/Images/vegbowl.jpg"
              alt="Organic Food"
              className="readmore-image"
            />
            <p>
              Molestiae cupiditate inventore animi, maxime sapiente optio, illo
              est nemo veritatis repellat sunt
              <br /> doloribus nesciunt! Minima laborum magni reiciendis qui
              voluptate quisquam voluptatem soluta
              <br /> illo eum ullam incidunt rem assumenda eveniet eaque sequi
              deleniti tenetur dolore amet fugit
              <br />
              perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea,
              repudiandae suscipit!
            </p>

            <div className="readmore-extra">
              <h2>#2. Creative WordPress Themes</h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam
                obcaecati rerum, eius aut, in.
                <br /> Exercitationem atque quidem tempora maiores ex architecto
                voluptatum aut officia doloremque.
                <br />
                Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                earum nisi consequatur quos
                <br /> odit quasi repellat qui officiis reiciendis incidunt hic
                non? Debitis commodi aut, adipisci.
              </p>
              <img
                src="/Images/peas.jpg"
                alt="Organic Farm"
                className="readmore-image"
              />
              <p>
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod,
                <br /> est eos ipsum. Unde aut non tenetur tempore, nisi culpa
                voluptate maiores officiis quis vel ab
                <br /> consectetur suscipit veritatis nulla quos quia aspernatur
                perferendis, libero sint. Error, velit, porro.
                <br /> Deserunt minus, quibusdam iste enim veniam, modi rem
                maiores.
              </p>
              <p>
                Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum,
                quo velit commodi rerum eum <br /> quidem pariatur! Quia fuga
                iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis
                porro <br />
                explicabo soluta commodi libero voluptatem similique id quidem?
                Blanditiis voluptates aperiam
                <br /> non magni. Reprehenderit nobis odit inventore, quia
                laboriosam harum excepturi ea.
              </p>

              <p>
                Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam
                ipsam quidem, dolor distinctio <br />
                similique asperiores voluptas enim, exercitationem ratione aut
                adipisci modi quod quibusdam
                <br /> iusto, voluptates beatae iure nemo itaque laborum.
                Consequuntur et pariatur totam fuga <br />
                eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae
                numquam nam ab voluptatibus <br />
                culpa, tenetur recusandae!
              </p>
              <p>
                Voluptas dolores dignissimos dolorum temporibus, autem aliquam
                ducimus at officia adipisci <br /> quasi nemo a perspiciatis
                provident magni laboriosam repudiandae iure iusto commodi
                debitis <br />
                est blanditiis alias laborum sint dolore. Dolores, iure,
                reprehenderit. Error provident, pariatur <br /> cupiditate
                soluta doloremque aut ratione. Harum voluptates mollitia illo
                minus praesentium, <br />
                rerum ipsa debitis, inventore?
              </p>
            </div>

            <div className="tag-buttons">
              <button className="tag-btn" onClick={scrollToTop}>
                LIFE
              </button>
              <button className="tag-btn" onClick={scrollToTop}>
                SPORT
              </button>
              <button className="tag-btn" onClick={scrollToTop}>
                TECH
              </button>
              <button className="tag-btn" onClick={scrollToTop}>
                TRAVEL
              </button>
            </div>

            <div className="author-box">
              <img
                src="/Images/img1.jpg"
                alt="Author"
                className="author-image"
              />
              <div className="author-details">
                <h2>Lance Smith</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus <br />
                  itaque, autem necessitatibus voluptate quod mollitia delectus
                  aut,
                  <br /> sunt placeat nam vero culpa sapiente consectetur
                  similique,
                  <br /> inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>

            <div className="comments-section">
              <h3>6 Comments</h3>

              {/* 1st Parent Comment */}
              <div className="comment">
                <img
                  src="/Images/img1.jpg"
                  alt="commenter"
                  className="comment-img"
                />
                <div className="comment-content">
                  <h4>John Doe</h4>
                  <p className="comment-date">June 27, 2018 at 2:21pm</p>
                  <p className="comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum
                    <br />
                    necessitatibus, ipsam impedit vitae autem, eum officia,
                    fugiat saepe enim sapiente
                    <br />
                    iste iure! Quam voluptas earum impedit necessitatibus,
                    nihil?
                  </p>
                  <button className="reply-btn" onClick={scrollToTop}>
                    Reply
                  </button>
                </div>
              </div>

              {/* 2nd Parent Comment */}
              <div className="comment">
                <img
                  src="/Images/img1.jpg"
                  alt="commenter"
                  className="comment-img"
                />
                <div className="comment-content">
                  <h4>John Doe</h4>
                  <p className="comment-date">June 27, 2018 at 2:21pm</p>
                  <p className="comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum
                    <br />
                    necessitatibus, ipsam impedit vitae autem, eum officia,
                    fugiat saepe enim sapiente
                    <br />
                    iste iure! Quam voluptas earum impedit necessitatibus,
                    nihil?
                  </p>
                  <button className="reply-btn" onClick={scrollToTop}>
                    Reply
                  </button>

                  {/* 3rd: Reply to 2nd comment */}
                  <div className="comment sub-comment">
                    <img
                      src="/Images/img1.jpg"
                      alt="commenter"
                      className="comment-img"
                    />
                    <div className="comment-content">
                      <h4>John Doe</h4>
                      <p className="comment-date">June 27, 2018 at 2:21pm</p>
                      <p className="comment-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem
                        <br />
                        laborum necessitatibus, ipsam impedit vitae autem, eum
                        officia, fugiat saepe
                        <br />
                        enim sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <button className="reply-btn" onClick={scrollToTop}>
                        Reply
                      </button>

                      {/* 4th: Reply to 3rd comment */}
                      <div className="comment sub-comment nested-comment">
                        <img
                          src="/Images/img1.jpg"
                          alt="commenter"
                          className="comment-img"
                        />
                        <div className="comment-content">
                          <h4>John Doe</h4>
                          <p className="comment-date">
                            June 27, 2018 at 2:21pm
                          </p>
                          <p className="comment-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur quidem
                            <br />
                            laborum necessitatibus, ipsam impedit vitae autem,
                            eum officia, fugiat
                            <br />
                            saepe enim sapiente iste iure! Quam voluptas earum
                            impedit
                            <br />
                            necessitatibus, nihil?
                          </p>
                          <button className="reply-btn" onClick={scrollToTop}>
                            Reply
                          </button>

                          {/* 5th: Reply to 4th comment */}
                          <div className="comment sub-comment nested-comment sub-nested-comment">
                            <img
                              src="/Images/img1.jpg"
                              alt="commenter"
                              className="comment-img"
                            />
                            <div className="comment-content">
                              <h4>John Doe</h4>
                              <p className="comment-date">
                                June 27, 2018 at 2:21pm
                              </p>
                              <p className="comment-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur <br /> quidem laborum
                                necessitatibus, ipsam impedit vitae autem, eum{" "}
                                <br />
                                officia, fugiat saepe enim sapiente iste iure!
                                Quam voluptas earum <br />
                                impedit necessitatibus, nihil?
                              </p>
                              <button
                                className="reply-btn"
                                onClick={scrollToTop}
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6th Parent Comment */}
              <div className="comment">
                <img
                  src="/Images/img1.jpg"
                  alt="commenter"
                  className="comment-img"
                />
                <div className="comment-content">
                  <h4>John Doe</h4>
                  <p className="comment-date">June 27, 2018 at 2:21pm</p>
                  <p className="comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur quidem laborum
                    <br />
                    necessitatibus, ipsam impedit vitae autem, eum officia,
                    fugiat saepe enim sapiente
                    <br />
                    iste iure! Quam voluptas earum impedit necessitatibus,
                    nihil?
                  </p>
                  <button className="reply-btn" onClick={scrollToTop}>
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {/*Leave*/}
            <h2 classname="contact-leave">Leave a comment</h2>
            <div class="comment-form">
              <form>
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" required />

                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required />

                <label for="website">Website</label>
                <input type="url" id="website" name="website" />

                <label for="message">Message</label>
                <textarea id="message" name="message" rows="6"></textarea>

                <button
                  type="submit"
                  class="post-comment-btn"
                  onClick={scrollToTop}
                >
                  Post Comment
                </button>
              </form>
            </div>
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

        <div className="scroll-top-button4" onClick={scrollToTop}>
          <span className="bounce-icon4">
            <FaChevronUp />
          </span>
        </div>
      </footer>
    </>
  );
};

export default ReadMore;
