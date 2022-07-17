import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ productsList }) => {
  return (
    <Wrapper>
      <div className="products">
        {productsList.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.4rem;
    row-gap: 3.2rem;

    @media only screen and (max-width: 73.125em) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 62em) {
      grid-template-columns: 1fr;
    }

    img {
      height: 17.5rem;
      object-fit: cover;
    }
  }
`;

export default GridView;
