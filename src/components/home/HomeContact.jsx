import React from 'react';
import styled from 'styled-components';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
function HomeContact() {
  return (
    <ContactContainer>
      <h3>문의하기</h3>
      <ContactBox>
        <div>
          <IconBox>
            <BsFillTelephoneFill
              style={{
                fontSize: '1.8rem',
              }}
            />
          </IconBox>
          <ContactTitle>연락처</ContactTitle>
          <ContactDetail>02-2290-6114</ContactDetail>
        </div>
        <div>
          <IconBox>
            <HiLocationMarker
              style={{
                fontSize: '1.8rem',
              }}
            />
          </IconBox>
          <ContactTitle>주소</ContactTitle>
          <ContactDetail>서울특별시 성동구 청계천로 540</ContactDetail>
        </div>
        <div>
          <IconBox>
            <MdEmail
              style={{
                fontSize: '1.8rem',
              }}
            />
          </IconBox>
          <ContactTitle>이메일</ContactTitle>
          <ContactDetail>sisul@seoul.go.kr</ContactDetail>
        </div>
      </ContactBox>
    </ContactContainer>
  );
}

export default HomeContact;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 75vh;
  padding: 5% 0;
  background-color: #ffffff;
  & > h3 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 3.5rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`;
const ContactBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 70%;
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;
const ContactTitle = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.7em;
`;
const ContactDetail = styled.span`
  color: #52616b;
`;
const IconBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-bottom: 1.3em;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.33);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #1fab89;
    & > * {
      color: #ffffff;
      transform: scale(1.1);
    }
  }
`;
