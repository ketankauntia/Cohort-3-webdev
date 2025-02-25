import React from "react";
import "./WishListContainer.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { wishItemstate } from "../store/wishItemsState";
import { cartItemState } from "../store/cartItemState";
import { useCart } from "../store/useCart";

function WishListContainer() {
  const [wishItems, setWishItems] = useRecoilState(wishItemstate);
  const [cartItems, setCartItems] = useRecoilState(cartItemState);

  //remove from wishlist
  const removeFromWishlist = (item) => {
    setWishItems((prev) => prev.filter((wishItem) => wishItem.id !== item.id));
  };

  //add to cart from wishlist
  const addToCartFromWishlist = (item) => {
    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    removeFromWishlist(item);
  };

  return (
    <div className="wish-cont">
      <div className="wish-heading">Your WishList</div>
      <div className="wish-prod-cont">
        {wishItems.length === 0 ? (
          <div>WishList is empty</div>
        ) : (
          wishItems.map((item) => {
            return (
              <div key={item.id} className="wish-product">
                <div className="wish-prod-details">{item.title}</div>
                <div className="wish-btn-cont">
                  <button
                    className="wish-btn wish-prod-addToCart-btn"
                    onClick={() => addToCartFromWishlist(item)}
                  >
                    Add to cart
                  </button>
                  <button
                    className="wish-btn wish-prod-delFromWishList-btn"
                    onClick={() => removeFromWishlist(item)}
                  >
                    Remove from wishList
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default WishListContainer;
