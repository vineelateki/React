import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";

// Import images from assets
import iphone from "../assets/iphone15.jpg";
import oneplus from "../assets/oneplus.jpg";
import realme from "../assets/Realme.jpg";
import samsung from "../assets/samsung.jpg";
import oppo from "../assets/oppo.jpg";
import poco from "../assets/poco.jpg";

// Product data with imported images
const products = [
  { id: 1, name: "iPhone 14", price: 79999, image: iphone },
  { id: 2, name: "OnePlus 11", price: 56999, image: oneplus },
  { id: 3, name: "Realme GT", price: 32999, image: realme },
  { id: 4, name: "Samsung S23", price: 74999, image: samsung },
  { id: 5, name: "Oppo Reno 8", price: 37999, image: oppo },
  { id: 6, name: "Poco X5 Pro", price: 24999, image: poco },
];

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  width: 250px;
  text-align: center;
  background: white;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Products = () => {
  const { addToCart } = useCart();

  return (
    <Container>
      <h1>Our Smartphone Collection</h1>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <Price>₹{product.price}</Price> {/* Rupees symbol added */}
            <AddToCartButton onClick={() => addToCart(product)}>
              Add to Cart
            </AddToCartButton>
          </ProductCard>
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default Products;
