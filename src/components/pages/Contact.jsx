import React from 'react';
import styled from 'styled-components';
import HomeContact from '../home/HomeContact';
import Map from '../Map';

function Contact() {
  return (
    <>
      <ContactContainer>
        <ContactBox>
          <h3>오시는 길</h3>
          <BottomBox>
            <Map />
          </BottomBox>
        </ContactBox>
        <span>주소 : 서울 종로구 창경궁로 81 종로4가혼수지하쇼핑센터</span>
      </ContactContainer>
      <HomeContact />
    </>
  );
}

export default Contact;

const ContactContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  max-width: 1920px;
  max-height: 944px;
  width: 100vw;
  height: 90vh;
  margin-top: 10vh;
  padding: 5% 0;
  & > span {
    position: absolute;
    bottom: 7%;
    color: #5e5e5ed1;
  }
`;
const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  & > h3 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 3.5rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
`;
const BottomBox = styled.div`
  flex-basis: 80%;
`;
