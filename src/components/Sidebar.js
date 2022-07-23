import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import styled from "styled-components";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar sidebar--show" : "sidebar"}`}
      >
        <header className="sidebar-header">
          <img
            src={logo}
            alt="Comfy Sloth Logo"
            className="sidebar-header__logo"
          />
          <button className="button button--close" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </header>

        <ul className="sidebar__list">
          {links.map((link) => {
            const { text, id, url } = link;
            return (
              <li key={id} className="sidebar__item" onClick={closeSidebar}>
                <Link to={url} className="sidebar__link">
                  {text}
                </Link>
              </li>
            );
          })}

          {myUser && (
            <li className="sidebar__item">
              <Link
                to="/checkout"
                className="sidebar__link"
                onClick={closeSidebar}
              >
                checkout
              </Link>
            </li>
          )}
        </ul>

        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background-color: #fff;
    transform: translateX(-100%);
    transition: all 0.3s linear;

    &.sidebar--show {
      transform: translateX(0);
      z-index: 999;
    }

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.6rem 2.4rem;

      &__logo {
        height: 4.5rem;
      }
    }

    &__list {
      margin-bottom: 3.2rem;
    }

    &__link {
      display: block;
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: capitalize;
      color: var(--clr-grey-3);
      padding: 1.6rem 2.4rem;
      transition: all 0.2s linear;

      :hover {
        padding: 1.6rem 2.4rem 1.6rem 3.2rem;
        background-color: var(--clr-grey-10);
        color: var(--clr-primary-5);
      }
    }
  }
`;

export default Sidebar;
