import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="Products" />
      <Wrapper className="container">
        <div className="products-wrapper">
          <Filters />
          <div className="product-right">
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  margin: 6.4rem auto;

  @media only screen and (max-width: 62em) {
    width: 90vw;
  }

  .products-wrapper {
    display: grid;
    grid-template-columns: 20rem 1fr;
    column-gap: 2.4rem;
    row-gap: 4.8rem;

    @media only screen and (max-width: 50em) {
      grid-template-columns: 1fr;
    }
  }
`;

export default ProductsPage;
