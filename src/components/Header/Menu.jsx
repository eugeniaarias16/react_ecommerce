import React, { useEffect, useState } from "react";
import {MenuItem} from "./MenuItem";
import styled from "styled-components";
import { color1, color2, color3, color4, color5 } from "../Styles/colors";
import { xs, s, m, l, xl } from "../Styles/sizes";
import {useApi} from "../hook/useApi";



const MenuBox = styled.ul` grid-area: menu;
justify-self: center;
display: flex;
width: 100%;
height: 4rem;
justify-content: space-between;
align-content: center;
text-decoration: none;
border-top: solid 0.0125rem;
padding: 0;


li {
    text-decoration: none;
    width: 20%;
    height: 80%;
    display: flex;
    text-align: center;
    justify-content: center;   
    align-items: center;
    a {
    color: ${color2};
    font-family: "Courier New", Courier, monospace;
    font-size: ${xs};
    text-decoration: none;
    &:hover {
        color: ${color3};
    }
    }
}
`;


const Menu = () => {

    const { data, isDeleting } = useApi('/categories');
    const[menuItems,setMenuItems]=useState([]);
useEffect(()=>{
    if(data){
        setMenuItems(data)
    }
},[data])


    return (
    <MenuBox>
        {menuItems.map((menuItem, index) => (
        <MenuItem
            key={index}
            name={menuItem.name}

        />
        
        ))}
        <MenuItem name={'All'} link={'#'}/>
        </MenuBox>
    );
};

export default Menu;
