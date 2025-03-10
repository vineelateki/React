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

const About = () => {
  return (
    <PageContainer>
      <h1>About Us</h1>
      <p>We are a top retail store providing quality laptops.</p>
    </PageContainer>
  );
};

export default About;
