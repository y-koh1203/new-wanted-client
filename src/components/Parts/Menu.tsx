import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const BackGroundLayer = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  position: fixed;
  background-color: #000000;
  opacity: 0.5;
  z-index: 10;
  transition: 0.5s;
`;

const MenuBody = styled.div`
  width: 100%;
  padding: 0;
  background-color: #ffffff;
  position: fixed;
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
  padding: 5% 0;
  border-top: 1px solid #bbbbba;
  font-size: 1.2em;
  text-align: center;
`;

const FirstItem = styled.div`
  width: 100%;
  padding: 5% 0;
  font-size: 1.2em;
  text-align: center;
  background-color: red;
  border-radius: 10;
`;

interface Props {
  menuItem: any;
  closeMenu(): void;
}

const Menu = (props: Props) => (
  <Wrapper>
    <BackGroundLayer onClick={props.closeMenu} />
    <MenuBody>
      <MenuList>
        {props.menuItem.map((v: any, i: any) => {
          return i === 0 ? <FirstItem>{v.title}</FirstItem> : <ListItem>{v.title}</ListItem>;
        })}
        <ListItem onClick={props.closeMenu}>閉じる</ListItem>
      </MenuList>
    </MenuBody>
  </Wrapper>
);

export default Menu;
