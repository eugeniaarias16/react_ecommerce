import React from "react";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { m } from "../../Styles/sizes";
import { color2, color4, color480 } from "../../Styles/colors";

const CarouselContainer = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
`;
const CaroulselImgs = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
const CarouselControls = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  background-color: transparent;
  top: 0px;
  button:hover {
    color: ${color2};
    border: none;
    background-color: ${color480};
  }
  button {
    background-color: transparent;
    border: none;
    font-size: ${m};
    border-radius: 100%;
    text-align: center;
    line-height: 100%;
    width: 50px;
    height: 50px;
    padding: 1px;
    margin: 5px;
    transition: 0.2 ease;
  }
`;
const CarouselTitle = styled.div``;


export const CarouselImages = ({
  id,
  link,
  img,
  title,
  previous,
  next,
  isVisible,
  currentIndex,
}) => {
  return (
    <CarouselContainer style={{ display: isVisible ? "block" : "none" }}>
      <CaroulselImgs>
        <a href={link}>
          <img src={img} alt={`Slide ${id}`} />
        </a>
      </CaroulselImgs>
      <CarouselControls>
        <button onClick={() => previous(currentIndex)}>
          <MdArrowBackIosNew />
        </button>
        <button onClick={() => next(currentIndex)}>
          <MdArrowForwardIos />
        </button>
      </CarouselControls>
      <CarouselTitle>{title}</CarouselTitle>
    </CarouselContainer>
  );
};
