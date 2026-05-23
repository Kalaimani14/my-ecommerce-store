import Nav from "./Components/Nav";
import NavBottom from "./Components/NavButtom";
import "./App.css"
import RunningOffer from "./Components/RunningOffer";
import CategoryPage from "./Components/CategoryPage";
import ProductsPage from "./Components/ProductsPage";
import Footer from "./Components/Footer";
import BrandCarousel from "./Components/BrandCarousel";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About.js"
import Login from "./Components/Login.js"
import Help from "./Components/Help.js"
import Contact from "./Components/Contact.js"
import CartPage from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import NotFound from "./Components/NotFound";



function App() {
  const [addedToCardCount, setAddedToCardCount] = useState(0);
  const [popupStatus, setPopupStatus] = useState(false);

  function headerCount(count) {
    setAddedToCardCount(count);
  }

  function openPopup() {
    setPopupStatus(true);
  }

  function closePopup() {
    setPopupStatus(false);
  }

  const Home = (
    <>
      <div className="site-hero">
        <div className="hero-inner max-w">
          <div className="hero-copy">
            <h1>Fresh groceries, delivered fast</h1>
            <p>Explore fresh fruits, vegetables and daily essentials. Free delivery over ₹499.</p>
          </div>
          <div className="hero-cta">
            <Link className="cart-btn" to="/product">Shop Now</Link>
          </div>
        </div>
      </div>
      <RunningOffer />
      <CategoryPage />
      <ProductsPage
        headerCount={headerCount}
        popupStatus={popupStatus}
        popupClose={closePopup}
      />
      <BrandCarousel />
    </>
  );
  return (
    <div className="app-root">
      <div className="container">
        <div  className="max-w">

      <Nav addedToCardCount={addedToCardCount}
        openPopup={openPopup} />
      <main className="main-content">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route
          path="/product"
          element={
            <ProductsPage
              headerCount={headerCount}
              popupStatus={popupStatus}
              popupClose={closePopup}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>
      <Footer />
      </div>
      </div>
      <NavBottom />
    </div>

  )
}
export default App;