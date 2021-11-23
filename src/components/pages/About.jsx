import React from 'react';
import styled from 'styled-components';
import { BasementStore, Clothes } from '../../images';
function About() {
  return (
    <>
      <AboutContainer>
        <h3>ABOUT</h3>
        <h3>종로4가 지하상가</h3>
        <AboutImg></AboutImg>
      </AboutContainer>
      <DescriptionContainer>
        <DescriptionBox>
          <LeftBox></LeftBox>
          <RightBox>
            <hr />
            <h3>예지동에서 시작된 역사</h3>
            <p>
              많이 것은 그들은 용기가 것이다. 얼음 가치를 것은 긴지라 피어나는
              가는 열매를 귀는 교향악이다. 실현에 투명하되 청춘의 듣기만 대중을
              보라. 위하여서, 이상의 놀이 피고 있는 인간에 사랑의 같은 소금이라
              말이다. 구하기 있는 피가 않는 황금시대다. 관현악이며, 아름답고
              용감하고 것이 간에 할지라도 교향악이다. 들어 이상, 풀밭에 인생에
              듣는다. 눈이 끓는 있으며, 이것이야말로 것은 평화스러운 피고 위하여
              관현악이며, 끓는다. 공자는 천고에 부패를 같이, 끝까지 인도하겠다는
              위하여 듣는다. 밝은 인간의 눈에 산야에 내는 그들은 꽃 힘있다.
            </p>
          </RightBox>
        </DescriptionBox>
      </DescriptionContainer>
    </>
  );
}

export default About;

const AboutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  max-height: 944px;
  width: 100vw;
  height: 100vh;
  & > h3 {
    z-index: 2;
    color: #ffffff;
    font-size: 3.5rem;
    font-weight: 900;
  }
  & > h3:nth-child(1) {
    margin-bottom: 2rem;
  }
`;
const AboutImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${BasementStore});
  background-position: center;
  background-size: cover;
  filter: brightness(60%);
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1920px;
  max-height: 944px;
  width: 100vw;
  height: 100vh;
`;
const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 70%;
`;
const LeftBox = styled.div`
  flex-basis: 35%;
  height: 80%;
  background-image: url(${Clothes});
  margin-left: 2.5%;
  margin-right: 5%;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -5px rgb(0 0 0 / 25%);
`;
const RightBox = styled.div`
  flex-basis: 70%;
  padding-left: 8%;
  & > hr {
    margin: 1.5rem 0;
    width: 10%;
    height: 4px;
    background-color: #d1d1d1;
    border: none;
    border-radius: 10px;
  }
  & > h3 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  & > p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    width: 65%;
    text-align: justify;
  }
`;
