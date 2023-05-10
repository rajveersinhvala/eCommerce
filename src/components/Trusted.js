import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <>
      <Wrapper>
        <div className="trusted-text">
          <p>Our Supported Company</p>
        </div>
        <div className="trusted-logo">
          <div className="logo-inside">1</div>
          <div className="logo-inside">2</div>
          <div className="logo-inside">3</div>
          <div className="logo-inside">4</div>
          <div className="logo-inside">5</div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  .trusted-text {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  .trusted-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 5rem 0;
    .trusted-logo {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      margin-top: 15px;
    }
    .logo-inside {
      margin: 10px;
    }
  }
`;

export default Trusted;
