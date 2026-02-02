import { Link } from "react-router-dom";


export default function NavBottom() {
  return (
    <div className="nav-bottom">
      <Link to="/" className="nav-item">
        🏠
        <span>Home</span>
      </Link>

      <Link to="/product" className="nav-item">
        🛍️
        <span>Products</span>
      </Link>

      <Link to="/search" className="nav-item">
        🔍
        <span>Search</span>
      </Link>

      <Link to="/cart" className="nav-item">
        🛒
        <span>Cart</span>
      </Link>

      <Link to="/profile" className="nav-item">
        👤
        <span>Profile</span>
      </Link>
    </div>
  );
}
