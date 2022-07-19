import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { totalItems, clearCart } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();
  return (
    <Wrapper className="cart-wrapper">
      <Link to="/cart" className="button button--cart" onClick={closeSidebar}>
        Cart
        <span className="cart">
          <FaShoppingCart className="cart__icon" />
          <span className="cart__quantity">{totalItems}</span>
        </span>
      </Link>

      {myUser ? (
        <button
          type="button"
          className="button button--auth"
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          type="button"
          className="button button--auth"
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 2.4rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  width: 22.5rem;
  margin: 0 auto;

  .cart {
    position: relative;
    display: flex;
    align-items: center;
    &__icon {
      width: 2.4rem;
      margin-left: 0.5rem;
    }

    &__quantity {
      position: absolute;
      top: -11px;
      right: -16px;
      font-size: 1.2rem;
      letter-spacing: 0;
      color: #fff;
      width: 2.4rem;
      height: 2.4rem;
      font-weight: 400;
      border-radius: 50%;
      background-color: var(--clr-primary-5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  button svg {
    color: var(--clr-grey-1);
  }
`;
export default CartButtons;
