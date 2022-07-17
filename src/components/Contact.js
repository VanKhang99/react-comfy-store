import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className="contact">
      <div className="container">
        <h3 className="heading-third">Join our newsletter and get 20% off</h3>

        <div className="contact-content">
          <p className="contact-content__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>

          <form
            className="contact-form"
            action="https://formspree.io/f/meqnwbpq"
            method="POST"
          >
            <input
              type="email"
              className="contact-form__input"
              placeholder="Enter Email"
              name="_replyto"
            />

            <button className="button button--subscribe">Subscribe</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 24rem 0;

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 12.8rem;
    row-gap: 12.8rem;

    &__description {
      font-size: 1.6rem;
      line-height: 2;
      color: var(--clr-grey-5);
    }
  }

  .contact-form {
    justify-self: start;
    font-size: 1.6rem;

    display: grid;
    width: 90vw;
    max-width: 50rem;
    grid-template-columns: 1fr auto;

    &__input {
      font-size: 1.6rem;
      color: var(--clr-grey-3);
      padding: 0.8rem 1.6rem;
      border-right: none;
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);

      ::placeholder {
        color: var(--clr-grey-3);
      }
    }
  }

  @media only screen and (max-width: 80em) {
    padding: 8rem 0;
  }

  @media only screen and (max-width: 62em) {
    .contact-content {
      grid-template-columns: 1fr;
      row-gap: 2rem;

      &__description {
        max-width: 72rem;
      }
    }
  }

  @media only screen and (max-width: 50em) {
    .contact-content__description {
      font-size: 1.4rem;
    }
  }
`;

export default Contact;
