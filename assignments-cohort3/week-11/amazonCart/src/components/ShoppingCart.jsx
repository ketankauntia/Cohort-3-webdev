import React from 'react'
import CartProduct from './CartProduct'

import './ShoppingCart.css'

function ShoppingCart() {
  return (
    <div className='cart-cont'>
      <h2>ShoppingCart</h2>
      {/* cartproduct to be mapped from cart list */}
      <CartProduct /> 
      <CartProduct /> 
      <CartProduct /> 
    </div>
  )
}

export default ShoppingCart