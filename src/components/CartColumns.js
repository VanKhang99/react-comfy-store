import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper className="cart-page-columns">
      <h5>Item</h5>
      <h5>Price</h5>
      <h5>Quantity</h5>
      <h5>Subtotal</h5>
      <span></span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.cart-page-columns {
    display: grid;
    grid-template-columns: 31.6rem 1fr 1fr 1fr auto;
    justify-items: center;
    align-items: center;
    column-gap: 1.6rem;

    @media only screen and (max-width: 50em) {
      display: none;
    }

    h5 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
      font-weight: normal;
      color: var(--clr-grey-5);
      letter-spacing: var(--spacing);
      line-height: 1;
    }

    span {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;

export default CartColumns;
