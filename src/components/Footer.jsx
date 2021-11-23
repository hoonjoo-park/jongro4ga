import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <LeftBox>
        <h3>종로4가 지하상가</h3>
        <span>Copy Right 2021 © By Hoonjoo Park All Rights Reserved</span>
      </LeftBox>
      <RightBox>
        <img
          src={
            'https://w.namu.la/s/5b26e369ed6e0344d27d9cdfa8c3bc67ba9c235c88cd04ff6eb833ba2704b939c59d49b746b6f8f6d82d35bb779e253be365a2ae8ebeb2a7cb63bcf1d1f5280dfe5059a649a52b5551b42e26bdee052ff4f6f8b6cc2ed058ce3eab543960edb6'
          }
          alt="right1"
        ></img>
        <img
          src={'https://www.sisul.or.kr/open_content/main/images/ci1.png'}
          alt="right2"
        ></img>
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
`;
const LeftBox = styled.div`
  width: 30%;
  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
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
  & > img:nth-child(1) {
    width: 30%;
  }
  & > img:nth-child(2) {
    width: 25%;
  }
`;
