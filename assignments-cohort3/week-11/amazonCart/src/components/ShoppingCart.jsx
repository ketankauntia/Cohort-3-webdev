import React from "react";
import CartProduct from "./CartProduct";

import "./ShoppingCart.css";

import { cartItemState } from "../store/cartItemState";
import { useRecoilState, useRecoilValue } from "recoil";
function ShoppingCart() {
  const [cartItems, setCartItems] = useRecoilState(cartItemState);

  return (
    <div className="cart-cont">
      <h2>ShoppingCart</h2>
      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <CartProduct id={item.id || index} item={item} />
          ))}
        </div>
      )}
      {/* cartproduct to be mapped from cart list */}
      {/* <CartProduct /> 
      <CartProduct /> 
      <CartProduct />  */}
    </div>
  );
}

export default ShoppingCart;
