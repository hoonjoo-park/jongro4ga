import React from 'react';
import styled from 'styled-components';
import Banner from './home/Banner';
import Masters from './home/Masters';
import HomeContact from './home/HomeContact';
import HomeCategories from './home/HomeCategories';

function Home() {
  return (
    <HomeContainer>
      <Banner />
      <Masters />
      <HomeCategories />
      <HomeContact />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
  min-height: 50rem;
  height: 100%;
`;
