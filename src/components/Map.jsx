import React, { useEffect } from 'react';
import styled from 'styled-components';
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById('map');

    let options = {
      center: new window.kakao.maps.LatLng(
        37.5699163475285,
        126.99789388690844
      ),
      level: 3,
    };
    let map = new window.kakao.maps.Map(container, options);
    map.setZoomable(false);
    let markerPosition = new kakao.maps.LatLng(
      37.5699163475285,
      126.99789388690844
    );

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return <MapContainer id="map"></MapContainer>;
};

export default Map;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -5px rgb(0 0 0 / 25%);
  @media screen and (max-width: 550px) {
    height: 80%;
  }
`;
