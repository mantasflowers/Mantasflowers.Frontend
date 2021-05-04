import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  border-bottom: 1px solid #000000;
  height: 600px;
  position: absolute;
  z-index: 3;
  width: 100%;

  background-image: url("/static/background-mantasflowers.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroContentBox = styled.div`
  text-align: center;
  margin: 280px auto;
  position: relative;
  z-index: 4;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 100%;
  color: "#422426";
`;

function Hero() {
  return (
    <StyledHero>
      <HeroContentBox>
        <Title>Mantas Flowers</Title>
      </HeroContentBox>
    </StyledHero>
  );
}

export default Hero;
