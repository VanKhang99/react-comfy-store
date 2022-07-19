import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { colors = [], id, stock } = product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const [productQuantity, setProductQuantity] = useState(1);

  const increaseQuantity = () => {
    setProductQuantity((oldQuantity) => {
      let newQuantity = oldQuantity + 1;
      if (newQuantity >= stock) {
        stock === 0 ? (newQuantity = 1) : (newQuantity = stock);
      }

      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setProductQuantity((oldQuantity) => {
      let newQuantity = oldQuantity - 1;
      if (newQuantity < 1) newQuantity = 1;
      return newQuantity;
    });
  };

  return (
    <Wrapper>
      <div className="product-colors">
        <span className="product-colors__label">Colors :</span>
        <div className="product-colors__list">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className="product-colors__item"
                style={{ backgroundColor: color }}
                onClick={() => setMainColor(colors[index])}
              >
                {mainColor === color ? <FaCheck /> : false}
              </button>
            );
          })}
        </div>
      </div>

      {stock !== 0 ? (
        <AmountButtons
          amount={productQuantity}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
      ) : null}

      {stock !== 0 ? (
        <Link
          to="/cart"
          className="button button--main product-button"
          onClick={() => addToCart(id, mainColor, productQuantity, product)}
        >
          Add to cart
        </Link>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-colors {
    margin: 3.2rem 0;
    display: flex;
    align-items: center;

    &__label {
      font-weight: bold;
      width: 12.5rem;
    }

    &__list {
      display: flex;
      align-items: center;
      gap: 1.6rem;
    }

    &__item {
      border: none;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      cursor: pointer;

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

  .product-button {
    margin-top: 2.4rem;
    font-size: 1.6rem;
    padding: 0.8rem 1.6rem;
  }
`;
export default AddToCart;
