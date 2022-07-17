import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { totalAmount, shippingFee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <Wrapper>
      <div className="cart-payment-container">
        <div className="cart-payment">
          <h5 className="cart-payment__subtotal">
            Subtotal : <span>{formatPrice(totalAmount)}</span>
          </h5>
          <p className="cart-payment__fee">
            Shipping fee : <span>{formatPrice(shippingFee)}</span>
          </p>
          <hr className="horizontal-line" />
          <h4 className="cart-payment__total">
            Order total : <span>{formatPrice(totalAmount + shippingFee)}</span>
          </h4>
        </div>

        {myUser ? (
          <Link to="/checkout" className="button button--main cart-auth">
            PROCEED TO CHECKOUT
          </Link>
        ) : (
          <button
            className="button button--main cart-auth"
            onClick={loginWithRedirect}
          >
            Login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 4.8rem;

  .cart-payment {
    padding: 2.4rem 4.8rem;
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    font-size: 1.6rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;

    &__subtotal,
    &__fee,
    &__total {
      display: grid;
      grid-template-columns: 20rem 1fr;
    }

    &__subtotal {
      margin-bottom: 1.2rem;
      font-size: 1.6rem;
    }

    &__fee {
      margin-bottom: 2rem;
    }

    &__total {
      margin: 3.2rem 0 1.2rem;
      font-size: 2.4rem;
      line-height: 1;
    }
  }

  .cart-auth {
    width: 100%;
    font-weight: bold;
    margin-top: 1.6rem;
    text-align: center;
  }

  @media only screen and (max-width: 50em) {
    justify-content: center;

    .cart-payment {
      padding: 2.4rem 4rem;

      &__subtotal,
      &__fee {
        font-size: 1.4rem;
      }

      &__total {
        font-size: 2rem;
      }
    }
  }
`;

export default CartTotals;
