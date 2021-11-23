import React, { useState } from 'react';
import styled from 'styled-components';
import { WatchFix, WatchRepair, Cheongye, Gwangjang } from '../../images';
function Banner() {
  const [slide, setSlide] = useState(0);
  return (
    <BannerContainer>
      <BannerLi slide={slide}>
        <BannerBG />
        <h3>종로4가 지하상가</h3>
        <p>
          유서 깊은 예지동 골목의 시계 장인들과 종로 한복 전문가, 그리고
          테일러샵
          <br />
          기성품들에서는 느낄 수 없는 장인들의 감성과 손길을 느껴보세요
        </p>
      </BannerLi>
      <BannerLi slide={slide}>
        <BannerBG />
        <h3>장인 지하상가</h3>
        <p>
          모든 제품들은 각 분야 30~40년 이상의 장인들의 손을 거칩니다.
          <br />
          고퀄리티의 합리적 가격의 상품들을 만나보세요
        </p>
      </BannerLi>
      <BannerLi slide={slide}>
        <BannerBG />
        <h3>청계와 함께 흐르는 지하상가</h3>
        <p>각 분야 장인들이 직접 제작하는 합리적인 가격의 상품들</p>
      </BannerLi>
      <BannerLi slide={slide}>
        <BannerBG />
        <h3>광장시장을 받치는 지하상가</h3>
        <p>각 분야 장인들이 직접 제작하는 합리적인 가격의 상품들</p>
      </BannerLi>
      <ButtonBox>
        <button onClick={() => setSlide(0)}></button>
        <button onClick={() => setSlide(`-100%`)}></button>
        <button onClick={() => setSlide(`-200%`)}></button>
        <button onClick={() => setSlide(`-300%`)}></button>
      </ButtonBox>
    </BannerContainer>
  );
}

export default Banner;
const BannerContainer = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  max-width: 1920px;
  max-height: 944px;
  width: 100vw;
  height: 100vh;
`;
const BannerLi = styled.li`
  position: relative;
  min-width: 100vw;
  transition: transform 0.4s ease-in-out;
  transform: translateX(${(props) => props.slide});
  & > h3 {
    position: absolute;
    font-size: 3rem;
    font-weight: 900;
    top: 35%;
    left: 17%;
    color: #ffffff;
  }
  & > p {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 17%;
    line-height: 2.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #ffffff;
  }
  & > div {
    background-position: center;
    background-size: cover;
  }
  &:nth-child(1) > div {
    background-image: url(${WatchFix});
  }
  &:nth-child(2) > div {
    background-image: url(${WatchRepair});
  }
  &:nth-child(3) > div {
    background-image: url(${Cheongye});
  }
  &:nth-child(4) > div {
    background-image: url(${Gwangjang});
  }
`;
const BannerBG = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  filter: brightness(55%);
`;
const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 5%;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  & > button {
    width: calc(1.5% + 20px);
    height: 0.6rem;
    border-radius: 20px;
    background-color: #eaeaeaea;
    margin-right: 1%;
    transition: opacity 0.2s;
  }
  & > button:hover {
    opacity: 0.8;
  }
`;
