import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ name, image, price, id }) => {
  return (
    <Wrapper className="product">
      <div className="product__image">
        <img src={image} alt={name} />
        <div className="product__image-overlay"></div>
        <Link to={`/products/${id}`} className="product__image-link">
          <FaSearch />
        </Link>
      </div>
      <div className="product__information">
        <span className="product__name">{name}</span>
        <span className="product__price">{formatPrice(price)}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .product {
    &__image {
      position: relative;

      img {
        position: relative;
        display: block;
        width: 100%;
        height: 22.5rem;
        object-fit: cover;
        border-radius: var(--radius);
      }

      &-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--clr-black);
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s linear;
      }

      &-link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s linear;

        width: 4rem;
        height: 4rem;
        background-color: var(--clr-primary-5);
        border-radius: 50%;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 2rem;
          height: 2rem;
          color: var(--clr-white);
        }
      }

      &:hover &-link {
        opacity: 1;
        z-index: 1;
        visibility: visible;
      }
    }

    &__information {
      margin-top: 1.6rem;
      font-size: 1.8rem;

      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 50em) {
        font-size: 1.4rem;
      }
    }

    &__name {
      text-transform: capitalize;
    }

    &__price {
      color: var(--clr-primary-5);
    }
  }

  .product__image:hover .product__image-overlay {
    opacity: 0.5;
    visibility: visible;
    border-radius: var(--radius);
  }

  .product__image:hover .product__image-link {
    opacity: 1;
    visibility: visible;
  }
`;
export default Product;
