import React from "react";
import styled from "styled-components";
import { CarouselImages } from "./CarouselImages";
import { useState } from "react";

const CarouselBox = styled.div`
  height: 90vh;
  width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Images = [
  {
    id: 1,
    img: "src/assets/carousel/C1.webp",
    title: "Clothes",
    link: "",
  },
  {
    id: 2,
    img: "src/assets/carousel/C2.webp",
    title: "Electronics",
    link: "",
  },
  {
    id: 3,
    img: "src/assets/carousel/C3.webp",
    title: "Furniture",
    link: "",
  },
  {
    id: 4,
    img: "src/assets/carousel/C4.webp",
    title: "Shoes",
    link: "",
  },
  {
    id: 5,
    img: "src/assets/carousel/C5.webp",
    title: "Others",
    link: "",
  },
  {
    id: 6,
    img: "src/assets/carousel/C6.webp",
    title: "All",
    link: "",
  },
  {
    id: 8,
    img: "src/assets/carousel/C8.webp",
    title: "Grocery",
    link: "",
  },
  {
    id: 7,
    img: "src/assets/carousel/C7.webp",
    title: "Computer Category",
    link: "",
  },
];

export const Carousel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const previous = (currentIndex) => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Images.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const next = (currentIndex) => {
    const isLastSlide = currentIndex === Images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  return (
    <CarouselBox>
      {Images.map((image, index) => (
        <CarouselImages
          key={index}
          img={image.img}
          title={image.title}
          previous={() => previous(currentIndex)}
          next={() => next(currentIndex)}
          isVisible={index === currentIndex}
          currentIndex={currentIndex}
        />
      ))}
    </CarouselBox>
  );
};
