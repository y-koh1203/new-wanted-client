import * as React from 'react';
import styled from 'styled-components';
// import Header from '../Header/Header';
// import Button from '../Parts/Button';

// const Wrapper = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   background-color: #ffffff;
// `;

const BackGroundLayer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  background-color: #000000;
  opacity: 0.5;
  z-index: 1;
`;

const MenuBody = styled.div`
  width: 100%;
  height:20vh;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
`;

interface Props {}

const Menu = (props:Props) => (
  <BackGroundLayer>
    <MenuBody />
  </BackGroundLayer>
);

export default Menu;
