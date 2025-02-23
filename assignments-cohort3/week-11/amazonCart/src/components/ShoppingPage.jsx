import React from 'react'
import ShoppingCart from './ShoppingCart'
import OrderSummary from './OrderSummary'
import './ShoppingPage.css'

function ShoppingPage() {
  return (
    <div className='shop-cart-cont'>
      <ShoppingCart />
      <OrderSummary />
    </div>
  )
}

export default ShoppingPage