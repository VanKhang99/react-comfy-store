import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper className="page-hero">
      <div className="container">
        <h3 className="heading-third">
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}
          <span className="page-hero__title">/ {title}</span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 20vh;
  background-color: var(--clr-primary-10);
  display: flex;
  align-items: center;

  h3 {
    margin-bottom: 1.2rem;
  }

  a {
    color: var(--clr-primary-3);
    padding: 0.8rem;
    transition: all 0.2s linear;

    &:hover {
      color: var(--clr-primary-1);
    }
  }

  .page-hero__title {
    text-transform: capitalize;
  }
`;

export default PageHero;
