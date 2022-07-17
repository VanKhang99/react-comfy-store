import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper className="services">
      <div className="container services-center">
        <div className="services-header">
          <h3 className="heading-third">
            Custom Furniture <br /> Built Only For You
          </h3>
          <p className="services-header__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>

        <ul className="services-list">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <li key={id} className="services-item">
                <span className="services-item__icon">{icon}</span>
                <h4 className="services-item__title">{title}</h4>
                <p className="services-item__description">{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  &.services {
    background-color: var(--clr-primary-10);
  }

  .services-center {
    transform: translateY(8rem);
  }

  .services-header {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &__description {
      font-size: 1.6rem;
      color: var(--clr-primary-3);
      line-height: 1.8;
    }
  }

  .services-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
    column-gap: 4rem;
    row-gap: 4rem;
    margin-top: 6.4rem;
  }

  .services-item {
    background-color: var(--clr-primary-7);
    border-radius: var(--radius);
    padding: 4rem 3.2rem;
    text-align: center;

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.6rem;
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      background-color: var(--clr-primary-10);

      svg {
        width: 3.2rem;
        height: 3.2rem;
        color: var(--clr-primary-1);
      }
    }

    &__title {
      text-transform: capitalize;
      font-size: 2.4rem;
      letter-spacing: var(--spacing);
      margin-bottom: 1.2rem;
      color: var(--clr-primary-1);
      line-height: 1;
    }

    &__description {
      font-size: 1.6rem;
      line-height: 1.8;
      color: var(--clr-primary-2);
    }
  }

  @media only screen and (max-width: 80em) {
    .services-center {
      transform: translateY(0rem);
      padding: 8rem 0;
    }

    .services-header {
      grid-template-columns: 1fr;

      h3 {
        margin-bottom: 3.2rem;
      }
    }
  }

  @media only screen and (max-width: 50em) {
    .services-list {
      grid-template-columns: 1fr;
    }

    .services-header__description,
    .services-item__description {
      font-size: 1.4rem;
    }

    .services-item__title {
      font-size: 2rem;
      line-height: 1.25;
    }
  }
`;
export default Services;
