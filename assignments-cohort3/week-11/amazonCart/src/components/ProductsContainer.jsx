import React from 'react'
import './ProductsContainer.css'
import Product from './Product'

function ProductsContainer() {
  return (
    <div>
        <div className="prod-cont-heading">Your WishList</div>
        <div className="prod-cont-display-options">
            <button>grid</button>
            <button>box</button>
            <input type="text" placeholder='searchbox' />
            <button>filter and sort</button>
        </div>
        <div className="prod-cont-prod">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}

export default ProductsContainer