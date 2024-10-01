import React from "react";


export const SubMenuList = ({ index,link,name }) => {
    return (
        <li key={index}><a href={link}>{name}</a></li>
    )

};

