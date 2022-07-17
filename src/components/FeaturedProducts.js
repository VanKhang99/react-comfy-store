import React from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    productsLoading: loading,
    productError: error,
    featuredProducts: features,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="featured-product padding-large">
      <div className="container">
        <h2 className="heading-second">Featured products</h2>
        <span className="underline"></span>

        <div className="featured-product__list">
          {features.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>

        <Link to="/products" className="button button--main">
          {" "}
          All Products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-grey-10);

  .container {
    text-align: center;
  }

  .featured-product {
    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
      column-gap: 4rem;
      row-gap: 4rem;

      margin: 6.4rem auto;
    }
  }
`;

export default FeaturedProducts;
