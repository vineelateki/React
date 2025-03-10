import React from "react";
import styled from "styled-components";
import { useCart } from "../context/CartContext";

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  max-width: 500px;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  background: #fff;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 5px;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <Container>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <CartContainer>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ProductImage src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}
          <TotalPrice>Total: ${totalPrice}</TotalPrice>
        </CartContainer>
      )}
    </Container>
  );
};

export default Cart;
