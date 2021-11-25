import React from 'react';
import styled from 'styled-components';
import {
  HanbokDisplay,
  Fixing,
  Fixing2,
  Tailor,
  Tailor2,
  Hanbok,
  Jagae,
  Jagae2,
} from '../../images';

function HomeCategories() {
  return (
    <CategoriesContainer>
      <h3>카테고리</h3>
      <NavBox>
        <span>한복</span>
        <span>양복</span>
        <span>시계수리</span>
        <span>악세사리</span>
      </NavBox>
      <ImageBox>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ImageBox>
    </CategoriesContainer>
  );
}

export default HomeCategories;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 5% 0;
  background-color: #f7f7f7;
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
  @media screen and (max-width: 550px) {
    padding: 20% 0;
    justify-content: flex-start;
  }
  & > h3 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 3.5rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 550px) {
      font-size: 1.7rem;
    }
  }
`;
const NavBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3.5rem;
  width: 25%;
  & > span {
    font-weight: 600;
    cursor: pointer;
    @media screen and (max-width: 550px) {
      font-size: 0.9rem;
    }
  }
  @media screen and (max-width: 550px) {
    width: 50%;
  }
`;

const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 70%;
  height: 100%;
  gap: 2rem;
  @media screen and (max-width: 1200px) {
    height: 60%;
    gap: 1rem;
  }
  @media screen and (max-width: 850px) {
    height: 50%;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    height: 100%;
    gap: 0.5rem;
  }
  & > div {
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 20px -5px rgb(0 0 0 / 25%);
    background-position: center;
    background-size: cover;
    filter: brightness(90%);
  }
  & div:nth-child(1) {
    background-image: url(${HanbokDisplay});
  }
  & div:nth-child(2) {
    background-image: url(${Fixing});
  }
  & div:nth-child(3) {
    background-image: url(${Tailor});
  }
  & div:nth-child(4) {
    background-image: url(${Jagae});
  }
  & div:nth-child(5) {
    background-image: url(${Hanbok});
  }
  & div:nth-child(6) {
    background-image: url(${Fixing2});
  }
  & div:nth-child(7) {
    background-image: url(${Tailor2});
  }
  & div:nth-child(8) {
    background-image: url(${Jagae2});
  }
`;
