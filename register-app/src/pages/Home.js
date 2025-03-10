import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  text-align: center;
`;

const Home = () => {
  return (
    <PageContainer>
      <h1>Welcome to Our Retail Store</h1>
      <p>Browse our amazing products!</p>
    </PageContainer>
  );
};

export default Home;
