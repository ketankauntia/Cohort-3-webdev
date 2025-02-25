import React from "react";
import "./PurchaseModal.css";

function PurchaseModal({ totalPrice, onClose }) {
  return (
    <div className="pr-model">
      <div>Purchase Succesfull</div>

      <div>TickICON</div>
      <div>
        Thank you for your purchase. Your order has been succesfully processed.
      </div>
      <div>Total Amount: Rs.{totalPrice}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default PurchaseModal;
