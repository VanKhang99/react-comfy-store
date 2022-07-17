import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Wrapper className="page">
      <div className="error">
        <h1 className="error__code">404</h1>
        <h4 className="error__description">
          Sorry, the page you tried cannot be found
        </h4>
        <Link className="button button--main" to="/">
          Back home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--clr-primary-10);

  &.page {
    height: calc(100vh - 16rem);
  }

  .error__code,
  .error__description {
    line-height: 1;
    letter-spacing: var(--spacing);
  }

  .error__code {
    font-size: 16rem;
    margin-bottom: 1.2rem;
  }

  .error__description {
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
  }
`;

export default ErrorPage;
