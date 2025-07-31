import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);
  const handleLinkClick = () => {
    setDropdownOpen(false);
    setMobileMenuOpen(false); // close mobile menu on link click
  };

  return (
    <>
      {isHome && (
        <div className="top-bar">
          <div className="top-left">
            <div className="contact-item phone">
              <i className="fa fa-phone white-icon"></i>
              <span>+1235 2355 98</span>
            </div>
            <div className="contact-item email">
              <i className="fa fa-envelope white-icon"></i>
              <span>YOUREMAIL@EMAIL.COM</span>
            </div>
          </div>

          <div className="top-right">
            <span>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</span>
          </div>
        </div>
      )}

      <header className={`main-header ${mobileMenuOpen ? "menu-open" : ""}`}>
        <div className="logo">VEGEFOODS</div>

        {/* Mobile Toggle Button */}
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <a href="/" onClick={handleLinkClick}>
            Home
          </a>

          <div
            className="dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="/" className="nav-link">
              SHOP <i className="fa fa-caret-down dropdown-icon"></i>
            </a>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/shop" onClick={handleLinkClick}>
                  Shop
                </Link>
                <Link to="/wishlist" onClick={handleLinkClick}>
                  Wishlist
                </Link>
                <Link to="/singleproduct" onClick={handleLinkClick}>
                  Single Product
                </Link>
                <Link to="/cartpage" onClick={handleLinkClick}>
                  Cart
                </Link>
                <Link to="/checkout" onClick={handleLinkClick}>
                  Checkout
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/blog" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
          <Link to="/cartpage" className="cart-icon" onClick={handleLinkClick}>
            🛒 [0]
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
