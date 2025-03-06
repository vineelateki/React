import React from "react";
import { useParams, Link } from "react-router-dom";
import laptopImg from "../assets/laptop.jpg";
import phoneImg from "../assets/phone.jpg";
import headphonesImg from "../assets/headphones.jpg";
import "./EcomStyles.css";

const productData = {
  1: { name: "Laptop", price: 999, img: laptopImg, desc: "High-performance laptop." },
  2: { name: "Phone", price: 699, img: phoneImg, desc: "Latest smartphone." },
  3: { name: "Headphones", price: 199, img: headphonesImg, desc: "Noise-canceling headphones." },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData[id];

  return (
    <div className="product-details">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.desc}</p>
      <p className="product-price">${product.price}</p>
      <Link to="/products">🔙 Back to Products</Link>
    </div>
  );
};

export default ProductDetails;
