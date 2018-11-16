import * as React from 'react';
import styled from 'styled-components';
import Button from '../Parts/Button';

const Wrapper = styled.div`
  width: 100%;
  background-color: lightgreen;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: middle;
`;

const Titile = styled.h1`
  width: 80%;
  text-align: center;
  font-size: 1.2rem;
  padding: 3% 0;
`;

const ButtonGround = styled.div`
  width: 20%;
  text-align: center;
  padding: 3% 0;
  vertical-align: middle;
`;

const TitleText = styled.span`
  margin-left: 25%;
`;

const click = () => {
  console.log('clicked!!');
};

const Header = () => (
  <Wrapper>
    <Flex>
      <Titile>
        <TitleText>Wanted!!</TitleText>
      </Titile>
      <ButtonGround>
        <Button title="title1" click={click} />
      </ButtonGround>
    </Flex>
  </Wrapper>
);

export default Header;
