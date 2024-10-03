import React from 'react'
import { color1, color2, color3, color4, color450, color5 } from '../../Styles/colors';
import styled from 'styled-components';

const CardContainer= styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    border: solid 1px ${color450} ;
    border-radius: 10px;
    padding: 15px;
    
    
    img{
        height: 150px;
        aspect-ratio: 2/2;
        justify-self: center;
    }
    h3,h4,h5{
        width: 100%;
        margin: 0;
        height: min-content;
    }
    button{
        position: relative;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 100%;
        
        font-size: 20px;
        transition: .2s ease-in-out;
        background-color: ${color4};
        &:hover{
            scale: .9;
        } 
    }
    div{
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
const CardCategory= styled.span`
    display: block;
    text-align: center;
    width: 100px;
    line-height: 20px;
    border-radius: 50px;
    height: 20px;
    color: ${color2};
    background-color: ${color3};
`;

export const CardSlider = ({ title, price, category, image, description,id}) => {

    // let newPrice= price*(1-discount)
    return (
        <CardContainer key={id}>
            <img src={image} alt={title} />
            <h3 style={{color:`${color2}`}}>{title}</h3>
            <h4>{price}</h4>
            <h5 style={{color:`${color4}`}}>{description}</h5>
            <CardCategory><h5>{category}</h5></CardCategory>
            <div><button>+</button></div>
        </CardContainer>
    )
}

