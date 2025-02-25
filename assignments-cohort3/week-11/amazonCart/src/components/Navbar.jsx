import React from "react";
import "./Navbar.css";
import { useRecoilState } from "recoil";
import { cartItemState } from "../store/cartItemState";
import { Link } from "react-router-dom";

function Navbar() {
  const [cartItems, setCartItems] = useRecoilState(cartItemState);
  const totalCartItems = 0;
  return (
    <div className="nav-cont">
      <Link to="/">
        <div className="-nav-logo">AMAZON.com</div>
      </Link>
      <Link to="/cart">
        <button className="nav-btn-cart" onClick={() => {}}>
          Cart {cartItems.reduce((total, x) => x.quantity + total, 0)}
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
