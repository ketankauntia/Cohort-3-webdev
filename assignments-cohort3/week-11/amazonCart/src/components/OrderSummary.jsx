import React from 'react'
import './OrderSummary.css'

function OrderSummary() {
  return (
    <div className='order-sum-cont'>
      <h2>Order Summary</h2>
      <div className='order order-first'>
        <div>Items(2):</div>
        <div>Rs.1231</div>
      </div>
      <div className='order '>
        <div>Items(2):</div>
        <div>Rs.1231</div>
      </div>
      <button className='order-btn'>Proceed To buy</button>
    </div>
  )
}

export default OrderSummary