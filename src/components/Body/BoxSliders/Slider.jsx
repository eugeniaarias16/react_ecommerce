import React from 'react'
import styled from 'styled-components';
import { xl } from '../../Styles/sizes';
import { color4 } from '../../Styles/colors';
import { CardSlider } from './CardSlider'; 

const SliderSection= styled.section`
box-sizing: content-box;
width: 100%;
height: 600px;
margin: 50px 0;



`;

const SliderBoxContainer= styled.div `
    height: 90%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
    overflow-x: scroll;
    scroll-behavior: smooth;

    /* min-width: 100%;
    height: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    overflow-x: scroll;
    scroll-behavior: smooth; */
`;


const SliderH2= styled.h2`
    margin: 20px 0;
    width: 100%;
    height: 1.5em;
    font-size: ${xl};
    color: ${color4};
    display: flex;
    justify-content: center;
`;



export const Slider = ({sectionTitle,items=[]}) => {
    const validItems = Array.isArray(items) ? items : [];
    
    return (
        <SliderSection>
            <SliderH2>{sectionTitle}</SliderH2>
            <SliderBoxContainer>
            {validItems.map((item,index) => (
            <CardSlider
            key={item.id} 
            title={item.title}
            description={item.description}
            price={item.price}
            // discount={item.discount}
            category={item.category}
            image={item.image}
            />
        ))}
            </SliderBoxContainer>
        </SliderSection>
    )
}

