import * as React from "react";
import styled from 'styled-components';
import Header from './Header/Header';

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: red;
`;

const Home = () => (
    <Wrapper>
        <Header />
        <div>
            <p>aaaaaaaaaa</p>
        </div>
    </Wrapper>
);

export default Home;