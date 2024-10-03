import React from "react";
import styled from "styled-components";
import { Carousel } from "./Carousel/Carousel";
import { Slider } from "./BoxSliders/Slider";
import JewelerySlider from "./BoxSliders/JewelerySlider";




const Body = () => {
    const MyBody=styled.div`
    margin: auto;
    grid-area: body;
    width: 90%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;



    `;

    return (
        <MyBody>
            <Carousel/>
            <JewelerySlider/>
        </MyBody>
    )
};

export default Body;