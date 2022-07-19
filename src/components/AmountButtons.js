import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease, small }) => {
  return (
    <Wrapper
      className={`${
        small === "true" ? "product-action small" : "product-action"
      } `}
    >
      <button
        className={`${
          small === "true"
            ? "button product-action__decrease small"
            : "button product-action__decrease"
        } `}
        onClick={decrease}
      >
        <FaMinus />
      </button>

      <span
        className={`${
          small === "true"
            ? "product-action__quantity small"
            : "product-action__quantity"
        }`}
      >
        {amount}
      </span>

      <button
        className={`${
          small === "true"
            ? "button product-action__increase small"
            : "button product-action__increase"
        } `}
        onClick={increase}
      >
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 14rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;

  @media only screen and (max-width: 62em) {
    justify-items: start;
  }

  &.small {
    width: 10rem;

    @media only screen and (max-width: 50em) {
      width: 7.5rem;
    }
  }

  .product-action {
    &__increase,
    &__decrease {
      display: flex;

      svg {
        width: 1.4rem;
        height: 1.4rem;
        color: var(--clr-grey-1);
      }

      &.small svg {
        width: 1.6rem;
        height: 1.6rem;

        @media only screen and (max-width: 50em) {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    }

    &__quantity {
      font-size: ${(props) => (props.small ? "2.4rem" : "4rem")};
      font-weight: bold;
      line-height: 1;
      color: var(--clr-grey-1);

      @media only screen and (max-width: 50em) {
        font-size: 3.2rem;
      }

      &.small {
        font-size: 2.4rem;

        @media only screen and (max-width: 50em) {
          font-size: 2rem;
        }
      }
    }
  }
`;

export default AmountButtons;
