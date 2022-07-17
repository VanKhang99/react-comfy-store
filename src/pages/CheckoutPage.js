import React from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="checkout">
        {cart < 1 ? (
          <div className="checkout--empty">
            <h2 className="heading-second">Your cart is empty</h2>
            <Link to="/products" className="button button--main">
              Fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  height: calc(100vh - 20vh - 16rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .checkout--empty {
    text-align: center;
  }
`;
export default CheckoutPage;
