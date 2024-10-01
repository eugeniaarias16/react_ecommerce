import React from "react";
import styled from "styled-components";
import { Carousel } from "./Carousel/Carousel";
import { BoxSlider } from "./BoxSliders/Slider";


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
            <BoxSlider/>
        </MyBody>
    )
};

export default Body;