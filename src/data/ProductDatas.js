import React, { useEffect, useState } from "react";
import "../Style/products.css";

export default function ProductsPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const formattedProducts = data.products.map((item) => ({
          id: item.id,

          imgurl: item.thumbnail,

          heading: item.title,

          oldPrice: Math.round(
            item.price + item.price * 0.25
          ),

          offerPrice: Math.round(item.price),

          quantity: 1,

          orderedq: 0,

          addtocard: 0,

          rating: item.rating,

          description: item.description,

          category: item.category
        }));

        setProduct(formattedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log("API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center" }}>
        Loading products...
      </h2>
    );
  }

  return (
    <div className="products-container">

      <h1 className="page-title">
        Product Store
      </h1>

      <div className="product-grid">
        {product.map((item) => (
          <div
            className="product-card"
            key={item.id}
          >
            <img
              src={item.imgurl}
              alt={item.heading}
              className="product-image"
            />

            <h3>{item.heading}</h3>

            <p className="category">
              {item.category}
            </p>

            <div className="price-box">
              <span className="old-price">
                ₹{item.oldPrice}
              </span>

              <span className="offer-price">
                ₹{item.offerPrice}
              </span>
            </div>

            <p className="rating">
              ⭐ {item.rating}
            </p>

            <button className="cart-btn">
              Add To Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}