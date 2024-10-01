import React from 'react'
import styled from 'styled-components'
import { s } from "../Styles/sizes";
import { color2, color3, color4, color5 } from "../Styles/colors";
import { LogIn } from './LogIn';
import { Cart } from './Cart';
import { Logo } from './Logo';


const Box = styled.div`
width: 100%;
height: 50%;
margin-bottom: 10px;
display: grid;
align-content: center;
grid-template-columns: 8fr 2fr;
grid-template-areas: "logo login";

`;

const UserBox = styled.div`
grid-area: login;
width: 100%;
height: 70%;
display: flex;
align-self: center;
justify-content: end;
align-content: center;
gap: 20px;
font-size: ${s};
transition: 1s ease-in-out;
a {
    color: ${color5};
    :hover {
    color: ${color3};
    
    }
}
`;

export const UserSection = () => {

    return (
        <Box>
            <Logo />
            <UserBox>
                <LogIn />
                <Cart />
            </UserBox>
        </Box>
    );
}


