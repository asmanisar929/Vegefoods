import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import FeaturesSection from "./Components/FeaturesSection";
import CategorySection from "./Components/CategorySection";
import ProductSection from "./Components/ProductSection";
import DealSection from "./Components/DealSection";
import TestimonialSection from "./Components/TestimonialSection";
import LogoSection from "./Components/LogoSection";
import Newsletter from "./Components/Newsletter";
import FooterSection from "./Components/FooterSection";
import ShopPage from "./Components/ShopPage";
import WishlistPage from "./Components/WishlistPage";
import SingleProduct from "./Components/SingleProduct";
import CartPage from "./Components/CartPage";
import CheckoutPage from "./Components/CheckoutPage";
import AboutPage from "./Components/AboutPage";
import Blogpage from "./Components/Blogpage";
import ContactPage from "./Components/ContactPage";
import ReadMore from "./Components/ReadMore";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategorySection />
      <ProductSection />
      <DealSection />
      <TestimonialSection />
      <LogoSection />
      <Newsletter />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main style={{ overflowX: "hidden" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/readmore" element={<ReadMore />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
