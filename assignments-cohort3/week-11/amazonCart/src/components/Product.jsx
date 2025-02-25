import React from "react";
import "./Product.css";
import { useRecoilState } from "recoil";
import { cartItemState } from "../store/cartItemState";

function Product({ data, onQuickView }) {
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
  };

  return (
    <div className="prod-card">
      <button
        className="quick-view-btn"
        onClick={(e) => {
          e.stopPropagation();
          onQuickView(data);
        }}
      >
        Quick View
      </button>
      <div className="prod-image">
        <img src={data.image} alt={data.id} />
      </div>
      <div className="prod-title">{data.title}</div>
      <div className="prod-price">Rs.{data.price}</div>
      <button className="prod-btn" onClick={() => addToCart(data)}>
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
