import { Link } from "react-router-dom";
import { useState } from "react";
import "../Style/nav.css";
import k from "../k-logo.avif";
import atc from "../atc.png";

export default function Nav(props) {

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="nav">
      <div className="max-w">
        <div className="nav-container">

          {/* Logo */}
          <div className="logo">
            <img src={k} alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="search-box">
            <input
              placeholder="Products Search..."
              type="text"
              value={search}
              onChange={handleSearch}
            />
          </div>

          {/* Desktop Menu */}
          <div className="nav-right">
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/product">Product</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/help">Help</Link>
            </div>

            <div className="auth-links">
              <Link to="/login">Log in</Link>
            </div>

            <div className="atc" onClick={props.openPopup}>  {/* make sure openPopup matches */}
              <img src={atc} alt="Cart" />
              <span className="add">{props.addedToCardCount}</span>
            </div>

            {/* Hamburger Menu Button */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/help" onClick={() => setMenuOpen(false)}>Help</Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Log in</Link>
          </div>
        )}
      </div>
    </div>
  );
}
