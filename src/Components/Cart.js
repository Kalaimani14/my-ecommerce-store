import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "../Style/cart.css";

import { SELLER_PHONE, COUPONS } from "../config";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(null);
  const [message, setMessage] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.offerPrice * item.orderedq,
    0
  );

  function applyCoupon() {
    const code = coupon.toUpperCase().trim();

    if (!code || !COUPONS[code]) {
      setMessage("Invalid coupon code");
      setApplied(null);
      return;
    }

    setApplied({ code, ...COUPONS[code] });
    setMessage(`Applied ${code}`);
  }

  function computeDiscount() {
    if (!applied) return 0;

    if (applied.type === "percent") {
      return Math.round((subtotal * applied.value) / 100);
    }

    return applied.value;
  }

  const discount = computeDiscount();
  const total = Math.max(0, subtotal - discount);

  function buyNow() {
    const lines = [];

    lines.push("Order Request from MyEcomStore");
    lines.push("\nItems:");

    cartItems.forEach((item) => {
      lines.push(
        `- ${item.heading} x${item.orderedq} = ₹${item.offerPrice * item.orderedq}`
      );
    });

    lines.push(`\nSubtotal: ₹${subtotal}`);

    if (applied) {
      lines.push(`Discount (${applied.code}): -₹${discount}`);
    }

    lines.push(`Total: ₹${total}`);
    lines.push("\nPlease confirm delivery address & contact number.");

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${SELLER_PHONE}?text=${text}`;

    window.open(url, "_blank");
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link className="continue-shopping" to="/">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.heading} className="cart-item-card">
                  <img
                    className="cart-item-image"
                    src={item.imgurl}
                    alt={item.heading}
                  />

                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.heading}</h3>
                    <p className="cart-item-price">₹{item.offerPrice}</p>

                    <div className="cart-quantity-box">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(
                            item.heading,
                            Math.max(1, item.orderedq - 1)
                          )
                        }
                      >
                        -
                      </button>

                      <span className="quantity-value">{item.orderedq}</span>

                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.heading, item.orderedq + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.heading)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="coupon-box">
                <input
                  className="coupon-input"
                  placeholder="Enter coupon code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />

                <button className="apply-btn" onClick={applyCoupon}>
                  Apply
                </button>

                <span className="coupon-message">{message}</span>
              </div>

              <div className="price-details">
                <p>
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </p>

                <p>
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </p>

                <h3>
                  <span>Total</span>
                  <span>₹{total}</span>
                </h3>
              </div>

              <div className="cart-actions">
                <button className="clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>

                <button className="whatsapp-btn" onClick={buyNow}>
                  Buy via WhatsApp
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}