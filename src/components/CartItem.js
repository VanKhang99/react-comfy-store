import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const CartItem = ({ id, image, name, price, color, amount }) => {
  const { removeCartItem, controlCartItemQuantity } = useCartContext();

  const increaseItem = (id) => {
    controlCartItemQuantity(id, "inc");
  };

  const decreaseItem = (id) => {
    controlCartItemQuantity(id, "dec");
  };

  return (
    <Wrapper className="cart-item">
      <div className="cart-item__info">
        <img src={image} alt={name} className="cart-item__image" />
        <div>
          <h5 className="cart-item__name">{name}</h5>
          <p className="cart-item__color">
            Color : <span style={{ backgroundColor: color }}></span>
          </p>
          <span className="cart-item__price--small">{formatPrice(price)}</span>
        </div>
      </div>

      <span className="cart-item__price">{formatPrice(price)}</span>

      <AmountButtons
        className="cart-item__control"
        amount={amount}
        increase={() => increaseItem(id)}
        decrease={() => decreaseItem(id)}
        small="true"
      />

      <span className="cart-item__total">{formatPrice(amount * price)}</span>

      <button
        className="button cart-item__remove"
        onClick={() => removeCartItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 4.8rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  align-items: center;
  justify-items: center;
  column-gap: 1.6rem;

  .cart-item {
    &__info {
      display: grid;
      grid-template-columns: auto 20rem;
      align-items: center;
      gap: 1.6rem;

      font-size: 1.6rem;
    }

    &__image {
      width: 10rem;
      height: 7.5rem;
      object-fit: cover;
      border-radius: var(--radius);
    }

    &__name {
      font-size: 1.6rem;
      text-transform: capitalize;
      width: 100%;
    }

    &__color {
      color: var(--clr-grey-5);

      display: flex;
      align-items: center;
      gap: 0.8rem;

      span {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: var(--radius);

        position: relative;
        top: 1px;
      }
    }

    &__price,
    &__total {
      font-size: 1.6rem;
    }

    &__price {
      color: var(--clr-primary-5);
    }

    &__price--small {
      display: none;
    }

    &__control {
    }

    &__total {
      color: var(--clr-grey-5);
    }

    &__remove {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: var(--radius);
      background-color: var(--clr-red-dark);

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 1.2rem;
        height: 1.2rem;
        color: var(--clr-white);
      }
    }
  }

  @media only screen and (max-width: 50em) {
    grid-template-columns: 20rem auto auto;

    .cart-item {
      &__info {
        justify-self: start;
        grid-template-columns: auto 1fr;
      }

      &__name,
      &__color {
        font-size: 1.4rem;
      }

      &__color span {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
      }

      &__price--small {
        display: block;
        font-size: 1.4rem;
        letter-spacing: var(--spacing);
        color: var(--clr-primary-5);
        font-weight: bold;
      }

      &__image {
        width: 7.5rem;
        height: 7.5rem;
      }

      &__price,
      &__total {
        display: none;
      }
    }
  }
`;

export default CartItem;
