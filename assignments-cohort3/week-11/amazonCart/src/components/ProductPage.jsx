import React from "react";
import WishListContainer from "./WishListContainer";
import ProductsContainer from "./ProductsContainer";
import "./ProductPage.css";

function ProductPage() {
  return (
    <div className="Prod-main-page-cont">
      <div className="wishlist-cont-main">
        <WishListContainer />
      </div>
      <ProductsContainer />
    </div>
  );
}

export default ProductPage;
