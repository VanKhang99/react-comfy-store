import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ListView = ({ productsList }) => {
  console.log(productsList);
  return (
    <Wrapper>
      <div className="products">
        {productsList.map((product) => {
          const { id, name, image, price, description } = product;
          return (
            <article key={id} className="product">
              <img src={image} alt={name} className="product__image" />
              <div className="product__information">
                <h4 className="heading-fourth">{name}</h4>
                <p className="product__price">{formatPrice(price)}</p>
                <p className="product__description">
                  {description.substring(0, 150)}...
                </p>

                <Link
                  to={`/products/${id}`}
                  className="button button--main product__details"
                >
                  Details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 6rem;
  }

  .product {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 3.2rem;
    font-size: 1.6rem;

    &__image {
      display: block;
      width: 30rem;
      height: 20rem;
      object-fit: cover;
      border-radius: var(--radius);
    }

    &__price {
      color: var(--clr-primary-6);
      font-weight: bold;
      letter-spacing: var(--spacing);
      margin-bottom: 1.2rem;
      line-height: 1.25;
    }

    &__description {
      margin-bottom: 1.6rem;
      color: var(--clr-grey-3);
    }

    &__details {
      text-transform: capitalize;
      padding: 0.4rem 1.6rem;
    }
  }

  @media only screen and (max-width: 62em) {
    .product {
      grid-template-columns: 1fr;
      justify-items: center;

      &__image {
        margin-bottom: 1.6rem;
      }

      &__information {
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 50em) {
    .product {
      &__information {
        h4 {
          font-size: 2rem;
        }
      }

      &__price,
      &__description {
        font-size: 1.4rem;
      }
    }
  }
`;

export default ListView;
