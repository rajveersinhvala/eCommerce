import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ img = [{ url: "" }] }) => {
  const [mainimg, Setmainimg] = useState(img[0]);

  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {img.map((cE, i) => {
          return (
            <figure key={i}>
              <img src={cE.url} alt="" key={i} onClick={() => Setmainimg(cE)} />
            </figure>
          );
        })}
      </div>
      <div className="main-screen">
        <img src={mainimg.url} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;
  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    order: 1;
    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;
    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
