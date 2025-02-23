import React from 'react'
import WishListContainer from './WishListContainer'
import ProductsContainer from './ProductsContainer'
import './ProductPage.css'

function ProductPage() {
  return (
    <div className='Prod-main-page-cont'>
    <WishListContainer />
    <ProductsContainer />
    </div>
  )
}

export default ProductPage