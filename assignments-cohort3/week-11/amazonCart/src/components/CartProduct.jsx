import React from 'react'
import './CartProduct.css'

function CartProduct() {
  return (
    <div className='cart-product-single'>
      <div className="cart-img">XX</div>
      <div className="cart-data">
        <div className="cart-info">
          <div>Title goes here</div>
          <div>In stock</div>
          <div className='cart-add-del'>
            <button>-</button>
            <div>1</div>
            <button>+</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="cart-data-price">Rs.{324}</div>
      </div>
    </div>
  )
}

export default CartProduct