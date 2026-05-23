import React from "react";
import "../Style/popup.css";
import { useCart } from "../contexts/CartContext";
import { SELLER_PHONE, COUPONS } from "../config";

export default function Popup({ popupstatus, popupclose }) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [coupon, setCoupon] = React.useState("");
  const [applied, setApplied] = React.useState(null);
  const [message, setMessage] = React.useState("");
  if (!popupstatus) return null;

  // use COUPONS from config

  const subtotal = cartItems.reduce((s, it) => s + it.offerPrice * it.orderedq, 0);

  function applyCoupon() {
    const code = (coupon || "").toUpperCase().trim();
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
    if (applied.type === "percent") return Math.round((subtotal * applied.value) / 100);
    return applied.value;
  }

  const discount = computeDiscount();
  const total = Math.max(0, subtotal - discount);

  return (
    <div className="popup-overlay" onClick={popupclose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={popupclose}>
          ✕
        </button>

        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p style={{ textAlign: "center", color: "#555" }}>Cart is empty!</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div className="popup-item" key={index}>
                <img src={item.imgurl} alt={item.heading} />
                <div className="item-info">
                  <h3>{item.heading}</h3>
                  <p>Price: ₹{item.offerPrice}</p>
                  <div className="quantity-box">
                    <button onClick={() => updateQuantity(item.heading, Math.max(1, item.orderedq - 1))}>-</button>
                    <span>{item.orderedq}</span>
                    <button onClick={() => updateQuantity(item.heading, item.orderedq + 1)}>+</button>
                  </div>
                  <p>Total: ₹{item.offerPrice * item.orderedq}</p>
                  <button onClick={() => removeFromCart(item.heading)}>Remove</button>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 12 }}>
              <input placeholder="Coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
              <button onClick={applyCoupon}>Apply</button>
              <span style={{ marginLeft: 8 }}>{message}</span>
              <div style={{ marginTop: 8 }}>
                <p>Subtotal: ₹{subtotal}</p>
                <p>Discount: -₹{discount}</p>
                <strong>Total: ₹{total}</strong>
              </div>
              <div style={{ marginTop: 8 }}>
                <button onClick={() => {
                  // open WhatsApp with order summary
                  // use SELLER_PHONE from config
                  const lines = [];
                  lines.push('Order Request from MyEcomStore');
                  lines.push('\nItems:');
                  cartItems.forEach((it) => lines.push(`- ${it.heading} x${it.orderedq} = ₹${it.offerPrice * it.orderedq}`));
                  lines.push(`\nSubtotal: ₹${subtotal}`);
                  if (applied) lines.push(`Discount (${applied.code}): -₹${discount}`);
                  lines.push(`Total: ₹${total}`);
                  lines.push('\nPlease send this order and confirm delivery address & contact number.');
                  const text = encodeURIComponent(lines.join('\n'));
                  const url = `https://wa.me/${SELLER_PHONE}?text=${text}`;
                  window.open(url, '_blank');
                }}>Buy via WhatsApp</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
