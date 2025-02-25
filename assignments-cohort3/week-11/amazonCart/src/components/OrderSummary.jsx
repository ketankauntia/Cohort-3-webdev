import React, { useState } from "react";
import "./OrderSummary.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartTotalSelector } from "../store/cartTotalSelector";
import PurchaseModal from "./PurchaseModal";
// import { cartItemState } from "../store/cartItemState";

function OrderSummary() {
  const { totalPrice, totalItems } = useRecoilValue(cartTotalSelector);
  // const [cartItems, setCartItems] = useRecoilState(cartItemState);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <button className="order-btn" onClick={() => setIsModalOpen(true)}>
            Proceed To buy
          </button>
        </>
      )}

      {isModalOpen && (
        <PurchaseModal
          totalPrice={totalPrice}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default OrderSummary;
