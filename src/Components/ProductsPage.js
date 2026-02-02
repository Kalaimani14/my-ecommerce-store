import { useState } from "react";
import "../Style/products.css";
import ProductDatas from "../data/ProductDatas";
import Popup from "./Popup";

export default function ProductsPage(props) {

  const [product, setProduct] = useState(ProductDatas);
  const [selectitem, setSelectitem] = useState([]);

  // -------- Add to Cart ----------
  function addToCartHandler(card) {

    const changedProduct = product.map((val) => {
      if (card.heading === val.heading) {
        return { 
          ...val, 
          addtocard: 1,
          orderedq: val.orderedq ? val.orderedq : 1   // ensure quantity starts from 1
        };
      }
      return val;
    });

    const selected = changedProduct.filter(
      (val) => val.addtocard === 1 && val.orderedq > 0
    );

    setSelectitem(selected);
    props.headerCount(selected.length);
    setProduct(changedProduct);
  }

  // -------- Popup Increment ----------
  function popIncrement(card) {
    const updated = selectitem.map((val) => {
      if (val.heading === card.heading) {
        return { ...val, orderedq: val.orderedq + 1 };
      }
      return val;
    });

    setSelectitem(updated);
  }

  // -------- Popup Decrement ----------
  function popDecrement(card) {
    const updated = selectitem.map((val) => {
      if (val.heading === card.heading && val.orderedq > 1) {
        return { ...val, orderedq: val.orderedq - 1 };
      }
      return val;
    });

    setSelectitem(updated);
  }

  return (
    <div className="products-page">
      <h2 className="prod-title">Featured Products</h2>

      <div className="prod-container small">
        {product.map((p) => (
          <div className="prod-card small-card" key={p.id}>
            <img src={p.imgurl} alt={p.name} />

            <div className="prod-info">
              <h3>{p.heading}</h3>

              <div className="price-box">
                <span className="old-price">₹{p.oldPrice}</span>
                <span className="offer-price">₹{p.offerPrice}</span>
              </div>

              <p className="rating">⭐ {p.rating}</p>

              <button onClick={() => addToCartHandler(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    <Popup
  popupstatus={props.popupStatus}  // match the prop name
  popupclose={props.popupClose}    // pass the close function
  popIncrement={popIncrement}
  popDecrement={popDecrement}
  selectitem={selectitem}
/>
    </div>
  );
}
