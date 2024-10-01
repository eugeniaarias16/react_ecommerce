import React from "react";
import styled from "styled-components";


const LogoBox= styled.div `
grid-area: logo;
font-size: 20px;
display: flex;

`;
export const Logo = () => {

    return (
    <LogoBox>
        <h1>OLD TOWN Shop.</h1>
    </LogoBox>);
};