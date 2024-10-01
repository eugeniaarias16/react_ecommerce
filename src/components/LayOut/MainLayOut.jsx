import React from 'react'
import styled from 'styled-components'
import { MyHeader } from '../Header/MyHeader';
import Body from '../Body/Body';

const MainLayOutContainer= styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-areas: 
    "header"
    "body"
    "footer";
`;


export const MainLayOut = () => {
    return (
        <MainLayOutContainer>
        <MyHeader/>
        <Body/>
        </MainLayOutContainer>
    )
}


