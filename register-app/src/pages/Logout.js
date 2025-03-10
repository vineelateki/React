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

const Logout = () => {
  return (
    <PageContainer>
      <h1>Logout Successful</h1>
      <p>Thank you for visiting! See you soon.</p>
    </PageContainer>
  );
};

export default Logout;
