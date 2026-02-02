import Nav from "./Components/Nav";
import NavBottom from "./Components/NavButtom";
import "./App.css"
import RunningOffer from "./Components/RunningOffer";
import CategoryPage from "./Components/CategoryPage";
import ProductsPage from "./Components/ProductsPage";
import Footer from "./Components/Footer";
import BrandCarousel from "./Components/BrandCarousel";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About.js"
import Login from "./Components/Login.js"
import Help from "./Components/Help.js"
import Contact from "./Components/Contact.js"



function App() {
  const [addedToCardCount, setAddedToCardCount] = useState(0);
  const [popUpStatus, setPopUpStatus] = useState(0);
  function headerCount(count) {
    setAddedToCardCount(count)
  }
  function openPopup() {
    setPopUpStatus(true);
  }

  function closePopup() {
    setPopUpStatus(false);
  }
  return (
    <div className="container">
      <div  className="max-w">
        
      <Nav addedToCardCount={addedToCardCount}
        openPopup={openPopup} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <NavBottom />
      <RunningOffer />
      <CategoryPage />
      <ProductsPage headerCount={headerCount}
        popupStatus={popUpStatus}
        popupClose={closePopup}
        popUpStatus={popUpStatus} />
      <BrandCarousel />
      <Footer />
      </div>
    </div>

  )
}
export default App;