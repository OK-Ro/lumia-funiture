import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
`;

const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const ImageSlide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
`;

const SliderContent = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: white;
  z-index: 10;
  max-width: 500px;
`;

const SliderTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SliderSubtitle = styled.p`
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 1.5rem;
`;

const SliderButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #ffffff;
  color: #000000;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const HeroComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Modern Living Room",
      subtitle:
        "Discover our collection of sleek and comfortable furniture for your living space.",
      buttonText: "Shop Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Cozy Bedroom",
      subtitle:
        "Create a relaxing sanctuary with our bedroom furniture and accessories.",
      buttonText: "Explore Bedroom",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Stylish Dining",
      subtitle:
        "Elevate your dining experience with our elegant tables and chairs.",
      buttonText: "View Dining Sets",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <HeroWrapper>
      <ImageSlider style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <ImageSlide
            key={index}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </ImageSlider>
      <SliderContent>
        <SliderTitle>{slides[currentSlide].title}</SliderTitle>
        <SliderSubtitle>{slides[currentSlide].subtitle}</SliderSubtitle>
        <SliderButton href="#">{slides[currentSlide].buttonText}</SliderButton>
      </SliderContent>
    </HeroWrapper>
  );
};

export default HeroComponent;
