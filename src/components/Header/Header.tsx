import * as React from 'react';
import styled from 'styled-components';
import Button from '../Parts/ButtonCircle';

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
  padding: 2% 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonGround = styled.div`
  width: 20%;
  text-align: center;
  padding: 2% 0;
`;

const TitleText = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: 24%;
`;

interface Props{
  handleClick(): void;
}

const Header = (props:Props) => (
  <Wrapper>
    <Flex>
      <Titile>
        <TitleText>Wanted!!</TitleText>
      </Titile>
      <ButtonGround>
        <Button title="K" click={props.handleClick} />
      </ButtonGround>
    </Flex>
  </Wrapper>
);

export default Header;
