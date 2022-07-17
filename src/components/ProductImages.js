/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <Wrapper>
      <img
        src={mainImage.url}
        alt="Product"
        className="product__image product__image--main"
      />

      <ul className="gallery">
        {images.map((image, index) => {
          return (
            <li key={index} className="gallery__item">
              <img
                src={image.url}
                alt={image.filename}
                className={
                  image.id === mainImage.id
                    ? "gallery__image gallery__image--active"
                    : "gallery__image"
                }
                onClick={() => setMainImage(images[index])}
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }

  .product__image--main {
    height: 50rem;

    @media only screen and (max-width: 62em) {
      height: 60rem;
    }

    @media only screen and (max-width: 36em) {
      height: 30rem;
    }
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1.6rem;

    &__image {
      height: 7.5rem;
      margin-top: 1.6rem;

      @media only screen and (max-width: 62em) {
        height: 10rem;
      }

      @media only screen and (max-width: 36em) {
        height: 5rem;
      }

      &--active {
        border: 2px solid var(--clr-primary-5);
      }
    }
  }
`;

export default ProductImages;
