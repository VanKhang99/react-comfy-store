import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper className="copyright">
      <p>
        <span className="copyright__name">
          &copy; {new Date().getFullYear()} <span>ComfySloth </span>
        </span>
        <span className="copyright__text">All rights reserved</span>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 8rem;
  background-color: var(--clr-black);
  color: var(--clr-white);
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: var(--spacing);

  @media only screen and (max-width: 50em) {
    font-size: 1.4rem;

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .copyright__name {
    span {
      color: var(--clr-primary-5);
    }
  }
`;

export default Footer;
