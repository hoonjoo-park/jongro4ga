import React from 'react';
import styled from 'styled-components';
import { SisulLogo, ISeoulU } from '../images';

function Footer() {
  return (
    <FooterContainer>
      <LeftBox>
        <h3>종로4가 지하상가</h3>
        <span>Copy Right 2021 © By Hoonjoo Park All Rights Reserved</span>
      </LeftBox>
      <RightBox>
        <img src={ISeoulU} alt="right1"></img>
        <img src={SisulLogo} alt="right2"></img>
      </RightBox>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  max-height: 300px;
  height: 25vh;
  background-color: #464c57;
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
const LeftBox = styled.div`
  width: 30%;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    @media screen and (max-width: 550px) {
      font-size: 1.2rem;
      text-align: center;
    }
  }
  & > span {
    white-space: nowrap;
    @media screen and (max-width: 550px) {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 0.7rem;
    }
  }
  & * {
    color: #ffffff;
  }
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 30%;
  @media screen and (max-width: 550px) {
    width: 60%;
  }
  & > img:nth-child(1) {
    width: 30%;
  }
  & > img:nth-child(2) {
    width: 25%;
  }
`;
