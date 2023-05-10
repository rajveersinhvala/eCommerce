import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ stars, reviews }) => {
  const ratingstar = Array.from({ length: 5 }, (e, index) => {
    let number = index + 0.5; //array in length ma 0.5 add thai aetle half start display krva
    return (
      <span key={index}>
        {/* stars=4.4 >= index=0 + 1; */}
        {/* i=0 , i=1, i=2, i=3, i=4, i=5 */}
        {stars >= index + 1 ? ( //4.4 >= 0 + 1 aetle condition true display thase loop jya
          //sudhi 4.4 thi upper no jai
          <FaStar className="icon" />
        ) : stars >= number ? ( //4.4 >= 4.5 conditon false
          <FaStarHalfAlt className="icon" />
        ) : (
          //aa print thase
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <>
      <Wrapper>
        <div className="icon-style">
          {ratingstar}
          <p>{reviews} Customers Reviews</p>
        </div>
      </Wrapper>
    </>
  );
};

export default Star;

const Wrapper = styled.section`
  .icon {
    color: gold;
    font-size: 2rem;
  }
`;
