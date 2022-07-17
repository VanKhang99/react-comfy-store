import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
const Sort = () => {
  const {
    filteredProducts: productsList,
    gridView,
    setGridView,
    setListView,
    updateSort,
    sort,
  } = useFilterContext();
  return (
    <Wrapper className="sort">
      <div className="sort-button">
        <button
          className={`button ${
            gridView
              ? "sort-button__view sort-button__view--active"
              : "sort-button__view"
          }`}
          onClick={() => setGridView()}
        >
          <BsFillGridFill />
        </button>

        <button
          className={`button ${
            !gridView
              ? "sort-button__view sort-button__view--active"
              : "sort-button__view"
          }`}
          onClick={() => setListView()}
        >
          <BsList />
        </button>
      </div>

      <p className="sort__results">{`${productsList.length} products found`}</p>

      <hr className="horizontal-line" />

      <div className="sort-select">
        <form>
          <label htmlFor="sort" className="sort-select__label">
            Sort by
          </label>
          <select name="sort" id="sort" value={sort} onChange={updateSort}>
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-az">name (a - z)</option>
            <option value="name-za">name (z - a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  column-gap: 3.2rem;
  margin-bottom: 3.2rem;
  font-size: 1.6rem;
  text-transform: capitalize;

  @media only screen and (max-width: 50em) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 36em) {
    grid-template-columns: 1fr;
    row-gap: 1.2rem;
  }

  .sort-button {
    display: flex;
    align-items: center;
    column-gap: 0.8rem;

    &__view {
      width: 2.4rem;
      height: 2.4rem;
      border: 1px solid var(--clr-black);
      border-radius: var(--radius);

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        width: 1.6rem;
        height: 1.6rem;
        color: var(--clr-black);
      }

      &--active {
        background-color: var(--clr-black);
        svg {
          color: var(--clr-white);
        }
      }
    }
  }

  .sort__results {
  }

  .sort-select {
    select {
      padding: 0.4rem 0.8rem;
      border-color: transparent;
      font-size: 1.6rem;
      text-transform: capitalize;

      @media only screen and (max-width: 50em) {
        font-size: 1.4rem;
      }
    }
  }
`;

export default Sort;
