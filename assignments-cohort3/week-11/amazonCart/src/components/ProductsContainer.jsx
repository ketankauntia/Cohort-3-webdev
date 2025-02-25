import React, { useState } from "react";
import "./ProductsContainer.css";
import Product from "./Product";
import ProductModal from "./ProductModal";

const products = [
  {
    id: 1,
    title: "RGB Gaming Mouse Redgear",
    price: 1241,
    image: "https://m.media-amazon.com/images/I/61Nl3y2p5XL._SL1500_.jpg",
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: 2999,
    image: "https://m.media-amazon.com/images/I/71Yh0rYJg1L._SL1500_.jpg",
  },
  {
    id: 3,
    title: "Gaming Headset",
    price: 1599,
    image: "https://m.media-amazon.com/images/I/61Kq7yXmJHL._SL1500_.jpg",
  },
  {
    id: 4,
    title: "Premium Gaming Chair",
    price: 14999,
    image: "https://m.media-amazon.com/images/I/71wQ4FkQ7HL._SL1500_.jpg",
  },
  {
    id: 5,
    title: "High-End Gaming Monitor",
    price: 39999,
    image: "https://m.media-amazon.com/images/I/81Qe+hD8JlL._SL1500_.jpg",
  },
  {
    id: 6,
    title: "Powerful Gaming PC",
    price: 129999,
    image: "https://m.media-amazon.com/images/I/71rXSVqET9L._SL1500_.jpg",
  },
  {
    id: 7,
    title: "VR Headset",
    price: 49999,
    image: "https://m.media-amazon.com/images/I/61hI4N3c5mL._SL1500_.jpg",
  },
  {
    id: 8,
    title: "Precision Gaming Mousepad",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/71g40i8rGQL._SL1500_.jpg",
  },
  {
    id: 9,
    title: "Pro-Level Gaming Controller",
    price: 7999,
    image: "https://m.media-amazon.com/images/I/61y8mXbB9aL._SL1500_.jpg",
  },
  {
    id: 10,
    title: "Immersive Gaming Speakers",
    price: 12999,
    image: "https://m.media-amazon.com/images/I/710P0Y3y1mL._SL1500_.jpg",
  },
  {
    id: 11,
    title: "Sleek Gaming Laptop",
    price: 89999,
    image: "https://m.media-amazon.com/images/I/71h4512V2BL._SL1500_.jpg",
  },
  {
    id: 12,
    title: "High-Performance Gaming Router",
    price: 9999,
    image: "https://m.media-amazon.com/images/I/61w7sV8vRcL._SL1500_.jpg",
  },
  {
    id: 13,
    title: "Advanced Gaming Webcam",
    price: 4999,
    image: "https://m.media-amazon.com/images/I/71z8r12s3FL._SL1500_.jpg",
  },
  {
    id: 14,
    title: "Top-Tier Gaming Microphone",
    price: 7999,
    image: "https://m.media-amazon.com/images/I/71gT35rU92L._SL1500_.jpg",
  },
];

function ProductsContainer() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="prod-cont-heading">Your WishList</div>
      <div className="prod-cont-display-options">
        <button>grid</button>
        <button>box</button>
        <input type="text" placeholder="searchbox" />
        <button>filter and sort</button>
      </div>
      <div className="prod-cont-prod">
        {products.map((p) => (
          <Product data={p} key={p.id} onQuickView={handleQuickView} />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleClose} />
      )}
    </div>
  );
}

export default ProductsContainer;
