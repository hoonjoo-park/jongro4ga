import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
function Header() {
  const [clicked, SetClicked] = useState(false);
  const location = useLocation();
  const handleClick = () => {
    SetClicked((clicked) => !clicked);
  };
  return (
    <NavBox toblack={location.pathname === '/contact'}>
      <NavLogo to="/">종로4가</NavLogo>
      <GiHamburgerMenu onClick={handleClick} />
      <NavUl clicked={clicked}>
        <li>
          <NavLink to="/" selected={location.pathname === '/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" selected={location.pathname === '/about'}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            selected={location.pathname === '/categories'}
          >
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" selected={location.pathname === '/contact'}>
            Contact
          </NavLink>
        </li>
      </NavUl>
    </NavBox>
  );
}

export default Header;

const NavBox = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 10vh;
  & > svg {
    position: absolute;
    top: 50%;
    right: 10vw;
    transform: translateY(-32%);
    font-size: 1.5rem;
    display: none;
    @media screen and (max-width: 550px) {
      display: block;
    }
  }
  & > * {
    ${(props) =>
      props.toblack
        ? css`
            color: #444444;
          `
        : css`
            color: #ffffff;
          `}
  }
  & > ul > * {
    @media screen and (max-width: 550px) {
      color: #ffffff;
    }
  }
`;
const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  margin-left: 17vw;
  @media screen and (max-width: 850px) {
    margin-left: 10vw;
  }
`;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 30%;
  margin-left: auto;
  margin-right: 17vw;
  @media screen and (max-width: 550px) {
    position: absolute;
    flex-direction: column;
    top: 8vh;
    right: 1px;
    margin-right: 0;
    background-color: rgba(10, 28, 50, 0.8);
    border-radius: 10px;
    min-height: 15rem;
    display: none;
    ${(props) =>
      props.clicked &&
      css`
        display: flex;
      `}
  }
  & > li {
    padding: 1em;
  }
`;
const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  transition: all 0.5s;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    border-radius: 20px;
    ${(props) =>
      props.selected &&
      css`
        animation: ${lineFade} 0.2s linear;
        width: 100%;
        height: 3.5px;
        background-color: #fc5185;
      `}
  }
`;

const lineFade = keyframes`
  0%{
    width:0%;
  }
  50%{
    width:50%;
  }
  100%{
    width: 100%;
  }
`;
