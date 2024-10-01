import React from 'react'
import { color1, color3, color4, color450, color5 } from '../../Styles/colors';
import styled from 'styled-components';

const CardContainer= styled.div`
    height:95%;
    width: 300px;
    border-radius: 20px;
    background-color: ${color450};
    color: ${color3};
    box-shadow: 0 0px 12px #d7c2aa4e;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* position: absolute; */
    img{
        width: 80%;
        height: 70%;
    }
    h2,h3,h4,h5{
        width: 100%;
        margin: 0;
        
    }
    button{
        position: relative;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 100%;
        bottom: -10px;
        font-size: 20px;
        transition: .2s ease-in-out;
        background-color: ${color4};
        &:hover{
            scale: .9;
        }
    }
`;


export const CardSlider = (onSale,key,title,price,category,img,description) => {

    // let newPrice= price*(1-discount)
    return (
        <CardContainer key={key}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <div>
            <h4>{price}</h4>
            {/* {onSale?<h4>{newPrice}</h4>:" "} */}
            </div>
            <h5>{description}</h5>
            <h5>{category}</h5>
            <button>+</button>
        </CardContainer>
    )
}

