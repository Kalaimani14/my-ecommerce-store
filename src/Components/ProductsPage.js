import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "../Style/products.css";
import Popup from "./Popup";

export default function ProductsPage(props) {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const formattedProducts = data.products.map((item) => ({
          id: item.id,
          imgurl: item.thumbnail,
          heading: item.title,
          oldPrice: Math.round(item.price + item.price * 0.25),
          offerPrice: Math.round(item.price),
          quantity: 1,
          orderedq: 1,
          addtocard: 0,
          rating: item.rating,
          description: item.description,
          category: item.category,
        }));

        setProduct(formattedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log("API Error:", err);
        setProduct([]);
        setLoading(false);
      });
  }, []);

  function addToCartHandler(card) {
    addToCart(card);

    if (props.headerCount) {
      props.headerCount((c) => (c ? c + 1 : 1));
    }
  }

  if (loading) {
    return <h2 className="prod-title">Loading products...</h2>;
  }

  return (
    <div className="products-page">
      <h2 className="prod-title">Featured Products</h2>

      <div className="prod-container small">
        {product.map((p, idx) => (
          <div className="prod-card small-card" key={p.id}>
            {p.rating >= 4.5 ? <div className="product-badge">Top Rated</div> : <div className="product-badge">{p.category}</div>}
            <Link to={`/product/${idx}`}>
              <img src={p.imgurl} alt={p.heading} />
            </Link>

            <div className="prod-info">
              <h3>{p.heading}</h3>

              <div className="price-box">
                <span className="old-price">₹{p.oldPrice}</span>
                <span className="offer-price">₹{p.offerPrice}</span>
              </div>

              <p className="rating">⭐ {p.rating}</p>

              <div className="prod-actions">
                <a href="#" onClick={(e)=>{e.preventDefault(); addToCartHandler(p)}}>Add to Cart</a>
                <Link to={`/product/${idx}`}>View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Popup
        popupstatus={props.popupStatus}
        popupclose={props.popupClose}
      />
    </div>
  );
}