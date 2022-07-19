import React, { useRef } from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    allProducts,
    updateFilters,
    clearFilters,
  } = useFilterContext();

  const queryRef = useRef();

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <Wrapper>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        {/* SEARCH */}
        <div className="form-control search">
          <input
            type="text"
            name="text"
            value={text}
            ref={queryRef}
            className="form-control__input"
            placeholder="Search"
            onChange={updateFilters}
          />
        </div>

        {/* CATEGORY */}
        <div className="form-control category">
          <strong className="form-control__label">Category</strong>
          <div className="form-control__category">
            {categories.map((cate, index) => {
              return (
                <button
                  key={index}
                  name="category"
                  className={`${
                    cate === category
                      ? "button form-control__button form-control__button--active"
                      : "button form-control__button"
                  }`}
                  onClick={updateFilters}
                >
                  {cate}
                </button>
              );
            })}
          </div>
        </div>

        {/* COMPANY */}
        <div className="form-control ">
          <strong className="form-control__label">Company</strong>
          <select
            name="company"
            value={company}
            id=""
            className="form-control__company"
            onChange={updateFilters}
          >
            {companies.map((com, index) => {
              return (
                <option key={index} value={com}>
                  {com[0].toUpperCase() + com.slice(1)}
                </option>
              );
            })}
          </select>
        </div>

        {/* COLORS */}
        <div className="form-control ">
          <strong className="form-control__label">Colors</strong>
          <div className="form-control__colors">
            {colors.map((col, index) => {
              // BUTTON ALL COLOR
              if (col === "all") {
                return (
                  <button
                    key={index}
                    name="color"
                    data-color={col}
                    className={`${
                      color === col
                        ? "button form-control__color-all active"
                        : "button form-control__color-all"
                    }`}
                    onClick={updateFilters}
                  >
                    {col}
                  </button>
                );
              }

              // BUTTON SINGLE COLOR
              return (
                <button
                  key={index}
                  name="color"
                  data-color={col}
                  className={`${
                    color === col
                      ? "button form-control__color-single active"
                      : "button form-control__color-single"
                  }`}
                  style={{ backgroundColor: col }}
                  onClick={updateFilters}
                >
                  {color === col ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRICE */}
        <div className="form-control ">
          <strong className="form-control__label">Price</strong>
          <p className="form-control__price">{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="form-control__range"
            onChange={updateFilters}
          />
        </div>

        {/* Shipping */}
        <div className="form-control ">
          <div className="form-control__shipping">
            <label htmlFor="shipping" className="form-control__label">
              Free shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              className="form-control__checkbox"
              onChange={updateFilters}
            />
          </div>
        </div>
      </form>

      <button onClick={clearFilters} className="button button--clear-filter">
        Clear filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .form {
    @media only screen and (max-width: 50em) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 3.2rem;

      .category {
        grid-row: 2 / 5;
        grid-column: 1;
      }
    }

    @media only screen and (max-width: 36em) {
      display: grid;
      grid-template-columns: 1fr;

      .category {
        grid-row: 2;
        grid-column: 1;
      }
    }
  }

  .form-control {
    margin-bottom: 3.2rem;

    @media only screen and (max-width: 50em) {
      margin-bottom: 2.4rem;
    }

    &__input {
      padding: 0.8rem;
      background-color: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      font-size: 1.6rem;
      width: 100%;

      @media only screen and (max-width: 50em) {
        width: unset;
      }
    }

    &__label {
      display: block;
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
      line-height: 1.25;

      @media only screen and (max-width: 50em) {
        font-size: 1.6rem;
      }
    }

    &__category {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 6px;
    }

    &__button {
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      color: var(--clr-grey-5);
      line-height: 1;
      font-size: 1.4rem;

      padding: 0.4rem 0;
      cursor: pointer;

      &--active {
        border-bottom: 1px solid var(--clr-grey-3);
        color: var(--clr-grey-3);
        font-weight: 500;
      }
    }

    &__company {
      background-color: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      padding: 0.4rem;
    }

    &__colors {
      display: flex;
      align-items: center;
      margin: 0.4rem 0;
      gap: 0.8rem;

      @media only screen and (max-width: 50em) {
        gap: 1.4rem;
      }
    }

    &__color-all {
      padding: 0.4rem 0;
      font-size: 1.4rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      color: var(--clr-grey-5);
      &.active {
        border-bottom: 1px solid var(--clr-grey-3);
        color: var(--clr-grey-3);
        font-weight: 500;
      }
    }

    &__color-single {
      padding: 0.4rem 0;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      @media only screen and (max-width: 36em) {
        width: 2.4rem;
        height: 2.4rem;
      }

      &.active {
        svg {
          width: 0.8rem;
          height: 0.8rem;
          color: var(--clr-white);
        }
      }
    }

    &__price {
      font-size: 1.6rem;
      line-height: 1.5;
      margin-bottom: 0.4rem;
      color: var(--clr-grey-3);
    }

    &__shipping {
      display: grid;
      grid-template-columns: auto 1fr;
      justify-items: center;
      column-gap: 0.8rem;
      font-weight: bold;

      label {
        letter-spacing: 0;
        margin-bottom: 0;
        text-transform: capitalize;
      }
    }
  }
`;

export default Filters;
