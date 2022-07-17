import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="hero container">
      <div className="hero__content">
        <h1 className="heading-first">
          Design Your <br />
          Comfort Zone
        </h1>
        <p className="hero__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link className="button button--main hero__button" to="/products">
          Shop now
        </Link>
      </div>

      <div className="hero-images">
        <img
          src={heroBcg}
          alt="Image furniture"
          className="hero-images__furniture"
        />
        <img
          src={heroBcg2}
          alt="Workspace"
          className="hero-images__workspace"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  &.hero {
    height: calc(100vh - 8rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    column-gap: 12.8rem;
    row-gap: 12.8rem;
  }

  .hero {
    &__description {
      font-size: 2rem;
      color: var(--clr-grey-5);
      line-height: 2;
      margin-bottom: 3.2rem;
    }

    &__button {
      font-size: 1.6rem;
      padding: 1.2rem 2.4rem;
    }

    &-images {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: -8%;

        display: inline-block;
        height: 80%;
        width: 10%;
        background-color: var(--clr-primary-9);
        border-radius: var(--radius);
      }

      &__furniture {
        position: relative;
        display: block;
        width: 100%;
        height: 55rem;
        border-radius: var(--radius);
        object-fit: cover;
      }

      &__workspace {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 25rem;
        transform: translateX(-50%);
        border-radius: var(--radius);
      }
    }
  }

  @media only screen and (max-width: 62em) {
    &.hero {
      max-height: 60vh;
      grid-template-columns: 1fr;
      justify-content: center;
    }

    .hero {
      &__content {
        max-width: 72rem;
      }

      &__description {
        font-size: 1.6rem;
      }

      &__button {
        padding: 0.6rem 1.2rem;
        font-size: 1.4rem;
      }
    }

    .hero-images {
      display: none;
    }
  }
`;

export default Hero;
