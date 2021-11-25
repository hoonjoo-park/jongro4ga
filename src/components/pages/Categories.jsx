import React from 'react';
import styled from 'styled-components';
import {
  Suits,
  WatchRepair2,
  Accessory,
  GuyWearingHanbok,
  AccessoryPortrait,
  TailorPortrait,
  HanbokPortrait,
  WatchRepairPortrait,
} from '../../images';

function Categories() {
  return (
    <CategoriesContainer>
      <AllContainer>
        <HanbokBanner>
          <HanbokBannerImg></HanbokBannerImg>
          <h3>한복</h3>
          <p></p>
        </HanbokBanner>
        <WatchBanner>
          <WatchBannerImg></WatchBannerImg>
          <h3>시계수리</h3>
          <p></p>
        </WatchBanner>
        <TailorBanner>
          <TailorBannerImg></TailorBannerImg>
          <h3>테일러샵</h3>
          <p></p>
        </TailorBanner>
        <AccBanner>
          <AccBannerImg></AccBannerImg>
          <h3>악세사리</h3>
          <p></p>
        </AccBanner>
      </AllContainer>
      <HanbokContainer>
        <EachBox>
          <LeftBox>
            <HanbokPortraitImg></HanbokPortraitImg>
          </LeftBox>
          <RightBox>
            <hr />
            <h3>한복</h3>
            <p>
              품고 청춘의 있는 사막이다. 거선의 그들의 낙원을 그림자는 가는
              위하여 곳이 있는가? 작고 아름답고 많이 목숨을 봄날의 이상
              있음으로써 그들의 바이며, 봄바람이다. 때까지 못하다 있을 피어나기
              많이 찬미를 보이는 같은 천지는 황금시대다. 힘차게 뛰노는 아니더면,
              쓸쓸한 열락의 두손을 이것이다. 이상은 심장은 싸인 못할 품고 지혜는
              있다. 위하여서 군영과 없으면, 이것은 피가 있는가? 바이며, 것은
              가장 굳세게 그들을 같이, 것이다. 것은 살았으며, 어디 사랑의
              피어나기 귀는 칼이다. 이상의 같이 오아이스도 이것을 가치를 청춘의
              인간에 황금시대다.
            </p>
          </RightBox>
        </EachBox>
      </HanbokContainer>
      <WatchContainer>
        <EachBox>
          <RightBox>
            <hr />
            <h3>시계수리</h3>
            <p>
              품고 청춘의 있는 사막이다. 거선의 그들의 낙원을 그림자는 가는
              위하여 곳이 있는가? 작고 아름답고 많이 목숨을 봄날의 이상
              있음으로써 그들의 바이며, 봄바람이다. 때까지 못하다 있을 피어나기
              많이 찬미를 보이는 같은 천지는 황금시대다. 힘차게 뛰노는 아니더면,
              쓸쓸한 열락의 두손을 이것이다. 이상은 심장은 싸인 못할 품고 지혜는
              있다. 위하여서 군영과 없으면, 이것은 피가 있는가? 바이며, 것은
              가장 굳세게 그들을 같이, 것이다. 것은 살았으며, 어디 사랑의
              피어나기 귀는 칼이다. 이상의 같이 오아이스도 이것을 가치를 청춘의
              인간에 황금시대다.
            </p>
          </RightBox>
          <LeftBox>
            <WatchPortraitImg></WatchPortraitImg>
          </LeftBox>
        </EachBox>
      </WatchContainer>
      <TailorContainer>
        <EachBox>
          <LeftBox>
            <TailorPortraitImg></TailorPortraitImg>
          </LeftBox>
          <RightBox>
            <hr />
            <h3>테일러샵</h3>
            <p>
              품고 청춘의 있는 사막이다. 거선의 그들의 낙원을 그림자는 가는
              위하여 곳이 있는가? 작고 아름답고 많이 목숨을 봄날의 이상
              있음으로써 그들의 바이며, 봄바람이다. 때까지 못하다 있을 피어나기
              많이 찬미를 보이는 같은 천지는 황금시대다. 힘차게 뛰노는 아니더면,
              쓸쓸한 열락의 두손을 이것이다. 이상은 심장은 싸인 못할 품고 지혜는
              있다. 위하여서 군영과 없으면, 이것은 피가 있는가? 바이며, 것은
              가장 굳세게 그들을 같이, 것이다. 것은 살았으며, 어디 사랑의
              피어나기 귀는 칼이다. 이상의 같이 오아이스도 이것을 가치를 청춘의
              인간에 황금시대다.
            </p>
          </RightBox>
        </EachBox>
      </TailorContainer>
      <AccContainer>
        <EachBox>
          <RightBox>
            <hr />
            <h3>악세사리</h3>
            <p>
              품고 청춘의 있는 사막이다. 거선의 그들의 낙원을 그림자는 가는
              위하여 곳이 있는가? 작고 아름답고 많이 목숨을 봄날의 이상
              있음으로써 그들의 바이며, 봄바람이다. 때까지 못하다 있을 피어나기
              많이 찬미를 보이는 같은 천지는 황금시대다. 힘차게 뛰노는 아니더면,
              쓸쓸한 열락의 두손을 이것이다. 이상은 심장은 싸인 못할 품고 지혜는
              있다. 위하여서 군영과 없으면, 이것은 피가 있는가? 바이며, 것은
              가장 굳세게 그들을 같이, 것이다. 것은 살았으며, 어디 사랑의
              피어나기 귀는 칼이다. 이상의 같이 오아이스도 이것을 가치를 청춘의
              인간에 황금시대다.
            </p>
          </RightBox>
          <LeftBox>
            <AccPortraitImg></AccPortraitImg>
          </LeftBox>
        </EachBox>
      </AccContainer>
    </CategoriesContainer>
  );
}

export default Categories;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;
const AllContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  & > div {
    position: relative;
  }
  & > div > div:nth-child(1) {
    position: absolute;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: brightness(60%);
  }
`;
const HanbokBanner = styled.div`
  flex-basis: 50%;
  position: relative;
  & > div {
    position: absolute;
  }
`;
const HanbokBannerImg = styled.div`
  background-image: url(${GuyWearingHanbok});
`;
const WatchBanner = styled.div`
  flex-basis: 50%;
  position: relative;
  & > div {
    position: absolute;
  }
`;
const WatchBannerImg = styled.div`
  background-image: url(${WatchRepair2});
`;
const TailorBanner = styled.div`
  flex-basis: 50%;
  position: relative;
  & > div {
    position: absolute;
  }
`;
const TailorBannerImg = styled.div`
  background-image: url(${Suits});
`;
const AccBanner = styled.div`
  flex-basis: 50%;
  position: relative;
  & > div {
    position: absolute;
  }
`;
const AccBannerImg = styled.div`
  background-image: url(${Accessory});
`;
const HanbokContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;
const WatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  &:nth-child(1) {
    background-color: tomato;
  }
`;
const TailorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;
const AccContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const EachBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 70%;
  @media screen and (max-width: 850px) {
    width: 90%;
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 95%;
  }
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 45%;
  height: 80%;
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 100%;
  }
  & > div {
    background-size: cover;
    background-position: center;
    width: 75%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -5px rgb(0 0 0 / 25%);
    @media screen and (max-width: 1200px) {
      height: 80%;
    }
    @media screen and (max-width: 850px) {
      height: 70%;
    }
    @media screen and (max-width: 550px) {
      width: 95%;
      height: 100%;
    }
  }
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 55%;
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
    @media screen and (max-width: 550px) {
      font-size: 1.7rem;
    }
  }
  & > p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    width: 65%;
    text-align: justify;
    @media screen and (max-width: 550px) {
      width: 95%;
    }
  }
`;
const HanbokPortraitImg = styled.div`
  background-image: url(${HanbokPortrait});
`;
const WatchPortraitImg = styled.div`
  background-image: url(${WatchRepairPortrait});
`;
const TailorPortraitImg = styled.div`
  background-image: url(${TailorPortrait});
`;
const AccPortraitImg = styled.div`
  background-image: url(${AccessoryPortrait});
`;
