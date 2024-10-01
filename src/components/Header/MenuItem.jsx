import React from "react";
import {SubMenuList} from "./SubMenuList";
import styled from "styled-components";
import { color1,color2, color3, color4, color5 } from "../Styles/colors";

export const MenuItem = ({ link, name, subMenuItems }) => {
    const MenuItemStyled = styled.li`
    position: relative;
    list-style: none;
    padding: 10px;

    ul {
        display: none;
        position: absolute;

        width: 100%;
        padding: 10px;
        list-style: none;
        margin: 0;
        top: 100%;
        left: 10px;
        z-index: 1;
    }

    &:hover ul {
        display: block;
    }

    ul li {
        padding: 5px;
        margin: 0;
        display: flex;
        justify-content: center;
        text-align: center;
        width: 100%;
        border-bottom: solid 0.00125rem ${color5};
    }
    `;
    return (
    <MenuItemStyled>
        <a href={link}>{name}</a>
        {subMenuItems && subMenuItems.length > 0 && (
        <ul>
            {subMenuItems.map((subMenuItem, index) => (
            <SubMenuList
                name={subMenuItem.nameSubMenu}
                link={subMenuItem.linkSubMenu}
                index={index}
            />
            ))};
            
        </ul>
        )}
    </MenuItemStyled>
    );
};

