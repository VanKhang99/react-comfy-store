import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="cart-page">
      <div className="container padding-large">
        <CartColumns />

        <hr className="cart-page__line horizontal-line" />

        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}

        <hr className="horizontal-line" />

        <div className="cart-page__action">
          <Link
            to="/products"
            className="button button--main cart-page__shopping"
          >
            Continue shopping
          </Link>

          <button className="button cart-page__clear" onClick={clearCart}>
            Clear shopping cart
          </button>
        </div>

        <CartTotals />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .cart-page__line {
    margin: 1.6rem 0 4.8rem;
  }

  .cart-page__action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;
  }

  .cart-page__shopping,
  .cart-page__clear {
    color: #fff;
    font-size: 1.6rem;
    padding: 0.4rem 0.8rem;
    text-transform: capitalize;
  }

  .cart-page__shopping:hover {
    background-color: var(--clr-primary-5);
  }

  .cart-page__clear {
    font-size: 1.4rem;
    border-radius: var(--radius);
    background-color: var(--clr-black);
    letter-spacing: var(--spacing);
    padding: 0.8rem;
  }

  @media only screen and (max-width: 50em) {
    .cart-page__line {
      display: none;
    }

    .cart-page__shopping {
      font-size: 1.4rem;
    }

    .cart-page__clear {
      padding: 0.4rem 0.8rem;
      line-height: 1.5;
    }
  }
`;
export default CartContent;
