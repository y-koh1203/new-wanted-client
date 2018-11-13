import * as React from 'react';
// import { render } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    backgtround-color: blue;
`;

const Titile = styled.h1`
    text-align: center;
    font-size: 1.2rem;
    padding: 1% 0;
`;

const Header = () => (
    <Wrapper>
        <Titile>Wanted!!</Titile>
    </Wrapper>
);

export default Header;