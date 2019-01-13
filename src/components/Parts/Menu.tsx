import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const BackGroundLayer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  position: absolute;
  background-color: #000000;
  opacity: 0.5;
  z-index: 10;
  transition: 0.5s;
`;

const MenuBody = styled.div`
  width: 100%;
  padding: 0;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  z-index: 20;
  transition: 0.5s;
  transition-timing-function: linear;
`;

const MenuList = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
`;

const ListItem = styled.div`
  width: 100%;
  padding: 4% 0;
  border-top: 1px solid #bbbbba;
  font-size: 1.2em;
  text-align: center;
`;

const FirstItem = styled.div`
  width: 100%;
  padding: 4% 0;
  font-size: 1.2em;
  text-align: center;
  border-radius: 10px 10px 0 0;
`;

interface Props {
  menuItem: Array<Object>;
  closeMenu(): void;
}

const Menu = (props: Props) => (
  <Wrapper>
    <BackGroundLayer onClick={props.closeMenu} />
    <MenuBody>
      <MenuList>
        {props.menuItem.map((v, i) => {
          return i === 0 ? (
            <FirstItem>{Object.values(v)}</FirstItem>
          ) : (
            <ListItem>{Object.values(v)}</ListItem>
          );
        })}
        <ListItem onClick={props.closeMenu}>閉じる</ListItem>
      </MenuList>
    </MenuBody>
  </Wrapper>
);

export default Menu;
