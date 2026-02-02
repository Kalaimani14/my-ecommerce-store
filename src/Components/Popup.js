import React from "react";
import "../Style/popup.css";

export default function Popup({
  popupstatus,
  popupclose,
  selectitem,
  popIncrement,
  popDecrement,
}) {
  if (!popupstatus) return null;

  return (
    <div className="popup-overlay" onClick={popupclose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button top-left */}
        <button className="close-btn" onClick={popupclose}>
          ✕
        </button>

        <h2>Your Cart</h2>

        {selectitem.length === 0 ? (
          <p style={{ textAlign: "center", color: "#555" }}>Cart is empty!</p>
        ) : (
          selectitem.map((item, index) => (
            <div className="popup-item" key={index}>
              <img src={item.imgurl} alt={item.heading} />
              <div className="item-info">
                <h3>{item.heading}</h3>
                <p>Price: ₹{item.offerPrice}</p>
                <div className="quantity-box">
                  <button onClick={() => popDecrement(item)}>-</button>
                  <span>{item.orderedq}</span>
                  <button onClick={() => popIncrement(item)}>+</button>
                </div>
                <p>Total: ₹{item.offerPrice * item.orderedq}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
