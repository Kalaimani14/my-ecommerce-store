import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { getProductByIndex, addToCart } = useCart();
  const product = getProductByIndex(Number(id));

  if (!product) return <div className="max-w">Product not found.</div>;

  return (
    <div className="product-details max-w">
      <h2>{product.heading}</h2>
      <img src={product.imgurl} alt={product.heading} />
      <p>Price: ₹{product.offerPrice}</p>
      <p>Old: ₹{product.oldPrice}</p>
      <p>Quantity available: {product.quantity}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}
