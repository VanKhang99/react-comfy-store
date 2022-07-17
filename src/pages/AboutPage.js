import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <Wrapper>
      <PageHero title="About" />
      <div className="container about-page">
        <img src={aboutImg} alt="Furniture" className="about-page__image" />
        <div className="about-content">
          <h2 className="heading-second">Our Story</h2>
          <span className="underline"></span>
          <p className="about-content__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-page {
    padding: 8rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 6.4rem;
    row-gap: 6.4rem;

    &__image {
      width: 100%;
      object-fit: cover;
      height: 50rem;
      display: block;
      border-radius: var(--radius);
    }
  }

  .about-content {
    .underline {
      margin: 0;
    }

    &__description {
      font-size: 1.6rem;
      margin-top: 3.2rem;
      color: var(--clr-grey-5);
      line-height: 2;
    }
  }

  @media only screen and (max-width: 62em) {
    .about-page {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 50em) {
    .about-content__description {
      font-size: 1.4rem;
    }
  }
`;
export default AboutPage;
