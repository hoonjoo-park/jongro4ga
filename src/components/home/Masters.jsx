import React from 'react';
import styled from 'styled-components';
import { Choi, Oh, Hyuk, Jeong, Sun, Park } from '../../images';
function Masters() {
  return (
    <MasterContainer>
      <h3>종로4가의 장인들</h3>
      <GridBox>
        <GridItem>
          <GridBG></GridBG>
          <h3>김정아 장인</h3>
          <p>"대중들에게 전통 한복의 아름다움을 알립니다"</p>
        </GridItem>
        <GridItem>
          <GridBG></GridBG>
          <h3>오태준 장인</h3>
          <p>"잃어버린 당신의 시간을 고쳐드립니다"</p>
        </GridItem>
        <GridItem>
          <GridBG></GridBG>
          <h3>김혁수 장인</h3>
          <p>"고객들의 소중힌 가치를 재단합니다"</p>
        </GridItem>
        <GridItem>
          <GridBG></GridBG>
          <h3>박화수 장인</h3>
          <p>"작은 오차도 허용하지 않겠습니다"</p>
        </GridItem>
        <GridItem>
          <GridBG></GridBG>
          <h3>최환석 장인</h3>
          <p>"한국적인 아름다움을 악세사리에 담습니다"</p>
        </GridItem>
        <GridItem>
          <GridBG></GridBG>
          <h3>김선평 장인</h3>
          <p>"훼손 없이 당신의 역사를 보존합니다"</p>
        </GridItem>
      </GridBox>
    </MasterContainer>
  );
}

export default Masters;

const MasterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  padding: 5% 0;
  & > h3 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 5rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 70%;
  height: 100%;
  justify-content: center;
  gap: 2rem;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 10px 30px -8px rgb(0 0 0 / 15%);
  border-radius: 5px;
  & > h3 {
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 600;
    z-index: 2;
    margin-bottom: 4%;
    transform: translateX(-30%);
    opacity: 0;
    transition: all 0.15s ease-in;
  }
  & > p {
    z-index: 2;
    color: #ffffff;
    transform: translateX(30%);
    opacity: 0;
    transition: all 0.15s ease-in;
    font-weight: 500;
  }
  &:hover > div {
    filter: grayscale(0%);
    filter: brightness(75%);
    transform: scale(1.02);
  }
  &:hover > h3 {
    opacity: 1;
    transform: translateX(0);
  }
  &:hover > p {
    opacity: 1;
    transform: translateX(0);
  }
  &:nth-child(1) > div {
    background-image: url(${Jeong});
  }
  &:nth-child(2) > div {
    background-image: url(${Oh});
  }
  &:nth-child(3) > div {
    background-image: url(${Hyuk});
  }
  &:nth-child(4) > div {
    background-image: url(${Park});
  }
  &:nth-child(5) > div {
    background-image: url(${Choi});
  }
  &:nth-child(6) > div {
    background-image: url(${Sun});
  }
`;
const GridBG = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
  filter: grayscale(90%) brightness(65%);
  transition: all 0.4s ease-in-out;
`;
