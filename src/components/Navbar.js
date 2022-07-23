import React, { useRef, useState, useEffect, useMemo } from "react";
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
  const targetRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const stickyCallback = (entries) => {
    const [entry] = entries;
    setIsSticky(entry.isIntersecting);
  };

  const optionsObserver = useMemo(() => {
    return {
      root: null,
      threshold: 0,
    };
  }, []);

  useEffect(() => {
    const observerNavbar = new IntersectionObserver(
      stickyCallback,
      optionsObserver
    );
    const currentTarget = targetRef.current;
    if (currentTarget) observerNavbar.observe(currentTarget);

    return () => {
      if (currentTarget) observerNavbar.unobserve(currentTarget);
    };
  }, [targetRef, optionsObserver]);

  return (
    <NavContainer ref={targetRef} className="nav">
      <div className={`${isSticky ? "" : "nav__sticky"}`}>
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
                <li key={id} className="nav__item">
                  <Link className="nav__link" to={url}>
                    {text}
                  </Link>
                </li>
              );
            })}
            {myUser && (
              <li className="nav__item">
                <Link className="nav__link" to="/checkout">
                  checkout
                </Link>
              </li>
            )}
          </ul>

          <CartButtons />

          <button className="button button--bars" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav {
    &__sticky {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: inherit;
      z-index: 100;
      background-color: var(--clr-primary-9);
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.08);
    }

    &__center {
      width: 90vw;
      max-width: var(--max-width);
      height: inherit;
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
