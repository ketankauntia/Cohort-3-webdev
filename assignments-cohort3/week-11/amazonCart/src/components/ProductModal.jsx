import React from "react";

import "./ProductModal.css";
import { useRecoilState } from "recoil";
import { cartItemState } from "../store/cartItemState";

function ProductModal({ product, onClose }) {
  const [cartItem, setCartItem] = useRecoilState(cartItemState);

  const addToCart = (product) => {
    setCartItem((prev) => {
      const existingItem = prev.find((x) => x.id === product.id);

      if (existingItem) {
        return prev.map((x) =>
          x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      }

      //else if product doesnt exist, we will add it with initial quantity of 1.
      return [...prev, { ...product, quantity: 1 }];
    });
    onClose(); //closing modal since product is added.
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="modal-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="modal-title">{product.title}</div>
        <div className="modal-price">Rs.{product.price}</div>
        <div className="modal-description">
          {product.description ? product.description : "NO description"}
        </div>
        <button
          className="modal-add-to-cart"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductModal;
