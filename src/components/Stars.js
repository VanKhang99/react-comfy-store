import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const arrayStars = Array.from({ length: 5 }, (_, index) => {
    const fillStar = index + 1;
    const halfStart = index + 0.5;
    return (
      <span key={index}>
        {stars > fillStar ? (
          <BsStarFill />
        ) : stars > halfStart ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="product__stars">{arrayStars}</div>
      <p className="product__reviews">{`(${reviews} customer reviews)`}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;

  .product__stars {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    line-height: 1;

    span svg {
      width: 1.6rem;
      height: 1.6rem;
      color: #ffb900;
    }
  }

  .product__reviews {
    font-size: 1.6rem;
    margin-left: 1.2rem;

    @media only screen and (max-width: 50em) {
      font-size: 1.4rem;
    }
  }
`;
export default Stars;

// const arrayStars = Array.from({ length: 5 }, (_, index) => {
//   if (stars > index + 1) {
//     return (
//       <span key={index}>
//         <BsStarFill />
//       </span>
//     );
//   }

//   if (stars >= index + 0.5) {
//     return (
//       <span key={index}>
//         <BsStarHalf />
//       </span>
//     );
//   }

//   return (
//     <span key={index}>
//       <BsStar />
//     </span>
//   );
// });
