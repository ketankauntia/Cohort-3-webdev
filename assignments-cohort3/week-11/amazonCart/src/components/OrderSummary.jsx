import React from "react";
import "./OrderSummary.css";
import { useRecoilValue } from "recoil";
import { cartTotalSelector } from "../store/cartTotalSelector";

function OrderSummary() {
  const { totalPrice, totalItems } = useRecoilValue(cartTotalSelector);

  return (
    <div className="order-sum-cont">
      <h2>Order Summary</h2>
      {totalItems === 0 ? (
        <div>Cart is empty atm. Nothing to calculate</div>
      ) : (
        <>
          <div className="order order-first">
            <div>Items({totalItems}):</div>
            <div>Rs.{totalPrice}</div>
          </div>
          <div className="order ">
            <div>Items({totalItems}):</div>
            <div>Rs.{totalPrice}</div>
          </div>
          <button className="order-btn">Proceed To buy</button>
        </>
      )}
    </div>
  );
}

export default OrderSummary;
