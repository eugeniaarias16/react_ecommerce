import React from 'react'
import { UserSection } from './UserSection';
import styled from 'styled-components'
import Menu from './Menu';

const HeaderContainer= styled.header`



`;

export const MyHeader = () => {
return (
    <div>
    <UserSection/>
    <Menu/>
    </div>
)
}


