import React, { createContext, useContext, useState } from "react";
import ProductDatas from "../data/ProductDatas";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems((prev) => {
      const found = prev.find((p) => p.heading === item.heading);
      if (found) {
        return prev.map((p) =>
          p.heading === item.heading ? { ...p, orderedq: p.orderedq + 1 } : p
        );
      }
      return [...prev, { ...item, orderedq: item.orderedq || 1 }];
    });
  }

  function removeFromCart(heading) {
    setCartItems((prev) => prev.filter((p) => p.heading !== heading));
  }

  function updateQuantity(heading, qty) {
    setCartItems((prev) =>
      prev.map((p) => (p.heading === heading ? { ...p, orderedq: qty } : p))
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  // expose a helper to lookup product by index
  function getProductByIndex(index) {
    return ProductDatas[index];
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getProductByIndex }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartContext;
