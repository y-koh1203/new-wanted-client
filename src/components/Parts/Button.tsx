import * as React from 'react';
import styled from 'styled-components';

const UIButton = styled.button`
  background-color: lightcoral;
  width: 30%;
  padding: 2%;
  border-radius: 10px;
`;

interface Props {
  title: string;
  click(): void;
}

const Button = (props: Props) => <UIButton onClick={props.click}>{props.title}</UIButton>;

export default Button;
