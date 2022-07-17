import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct: product,
    fetchSingleProduct,
  } = useProductsContext();

  const {
    colors,
    company,
    description,
    id: sku,
    images,
    name,
    price,
    reviews,
    stars,
    stock,
  } = product;

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper>
      <PageHero title={name} product={product} />
      <div className="container padding-large">
        <Link to="/products" className="button button--main">
          Back to products
        </Link>

        <div className="product">
          <ProductImages images={images} />

          <div className="product-information">
            <h2 className="heading-second">{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <span className="product-information__price">
              {formatPrice(price)}
            </span>
            <p className="product-information__description">{description}</p>
            <p className="product-information__stock">
              <span>Available :</span>
              {stock > 0 ? `${stock}` : "Out of stock"}
            </p>
            <p className="product-information__id">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="product-information__brand">
              <span>Brand :</span>
              {company}
            </p>

            <hr className="horizontal-line" />

            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 6.4rem;
    row-gap: 6.4rem;
    margin-top: 3.2rem;
    color: var(--clr-grey-3);

    @media only screen and (max-width: 62em) {
      grid-template-columns: 1fr;
    }
  }

  .product-information {
    @media only screen and (max-width: 50em) {
      font-size: 1.4rem;
    }

    h2 {
      color: var(----clr-grey-1);
    }

    font-size: 1.6rem;
    &__price {
      display: block;
      font-size: 2rem;
      color: var(--clr-primary-5);
      font-weight: bold;
      letter-spacing: var(--spacing);
      margin-bottom: 1.2rem;

      @media only screen and (max-width: 62em) {
        font-size: 1.6rem;
      }
    }

    &__description {
      line-height: 2;
      margin-bottom: 2rem;
    }

    &__stock,
    &__id,
    &__brand {
      margin-bottom: 2rem;
      text-transform: capitalize;

      span {
        display: inline-block;
        width: 12.5rem;
        line-height: 1.5;
        font-weight: bold;
      }
    }
  }
`;

export default SingleProductPage;
