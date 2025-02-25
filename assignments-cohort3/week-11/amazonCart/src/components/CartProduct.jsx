import React from "react";
import "./CartProduct.css";
import { cartItemState } from "../store/cartItemState";
import { useRecoilState } from "recoil";

function CartProduct({ item }) {
  const [cartItems, setCartItems] = useRecoilState(cartItemState);

  const updateQuantity = (id, change) => {
    setCartItems((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + change }
          : cartItem
      )
    ).filter((cartItem) => cartItem.quantity > 0);
  };

  const removeItem = (id) => {
    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id != id)
    );
  };

  return (
    <div className="cart-product-single">
      <div className="cart-img">{<img src={item.image} />}</div>
      <div className="cart-data">
        <div className="cart-info">
          <div>{item.name}</div>
          <div>{item.inStock ? "In Stock" : "Out of Stock"}</div>
          <div className="cart-add-del">
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <div>{item.quantity}</div>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </div>
        </div>
        <div className="cart-data-price">Rs.{item.price}</div>
      </div>
    </div>
  );
}

export default CartProduct;
