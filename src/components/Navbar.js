import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <NavContainer className="nav">
      <div className="nav__center">
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="Comfy Sloth logo" />
          </Link>
        </div>

        <ul className="nav__list">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>

        <CartButtons />

        <button className="button button--bars" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  .nav {
    &__center {
      width: 90vw;
      max-width: var(--max-width);
      margin: 0 auto;

      display: grid;
      grid-template-columns: auto 1fr auto;
      justify-items: center;
      align-items: center;

      @media only screen and (max-width: 62em) {
        grid-template-columns: max-content max-content;
        justify-content: space-between;
      }
    }

    &__logo {
      a {
        display: block;
      }

      img {
        width: 17.5rem;
        margin-left: -1.5rem;
      }
    }

    &__list {
      display: flex;
      align-items: center;

      @media only screen and (max-width: 62em) {
        display: none;
      }

      li {
        margin: 0 0.8rem;
      }

      a {
        display: inline-block;
        font-size: 1.8rem;
        text-transform: capitalize;
        color: var(--clr-grey-3);
        padding: 0.8rem;
        font-weight: 500;
        transition: all 0.2s linear;

        :hover {
          color: var(--clr-primary-5);
        }
      }
    }
  }

  .cart-wrapper {
    @media only screen and (max-width: 62em) {
      display: none;
    }
  }
`;

export default Nav;
