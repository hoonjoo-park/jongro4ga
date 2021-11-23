import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

function Header() {
  const location = useLocation();
  return (
    <NavBox toblack={location.pathname === '/contact'}>
      <NavLogo to="/">종로4가</NavLogo>
      <NavUl>
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
  & > * {
    ${(props) =>
      props.toblack
        ? css`
            color: #444444;
          `
        : css`
            color: #ffffff;
          `}/* color: #ffffff; */
  }
`;
const NavLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  margin-left: 17vw;
`;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 30%;
  margin-left: auto;
  margin-right: 17vw;
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
