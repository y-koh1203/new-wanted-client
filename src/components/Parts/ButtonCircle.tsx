import * as React from 'react';
import styled from 'styled-components';

const UIButton = styled.button`
    background-color: lightcoral;
    width: 100%;
    min-width: 40px;
    max-width: 50px;
    height: 12vw;
    max-height: 40px
    min-height: 50px;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #00b1f4;
`;

interface Props {
  title: string;
  click(): void;
}

const ButtonCircle = (props: Props) => <UIButton onClick={props.click}>{props.title}</UIButton>;

export default ButtonCircle;
