import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className="container empty padding-large">
          <h2 className="heading-second">Your cart is empty</h2>
          <Link to="/products" className="button button--main">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PageHero title="Cart" />
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .container {
    &.empty {
      text-align: center;
      height: calc(100vh - 16rem);
    }

    @media only screen and (max-width: 48em) {
      padding: 6rem 0;
    }

    h2 {
      text-transform: unset;
      margin-bottom: 1.6rem;
    }
  }
`;

export default CartPage;
