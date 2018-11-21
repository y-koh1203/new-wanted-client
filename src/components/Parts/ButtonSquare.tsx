import * as React from 'react';
import styled from 'styled-components';

const UIButton = styled.button`
  background-color: lightcoral;
`;

interface Props {
  title: string;
  click(): void;
}

const ButtonSquare = (props: Props) => <UIButton onClick={props.click}>{props.title}</UIButton>;

export default ButtonSquare;
