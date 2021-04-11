import React from "react";
import styled from "styled-components";

const StyledHero = styled.div`
  border-bottom: 1px solid #000000;
  height: 600px;
  position: absolute;
  z-index: 3;
  width: 100%;

  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 49%,
    rgba(252, 176, 69, 1) 100%
  );
`;

const HeroContentBox = styled.div`
  text-align: center;
  margin: 160px auto;
  position: relative;
  z-index: 4;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 100%;
`;

const Subtitle = styled.h5`
  font-size: 20px;
  font-weight: 570;
  width: 100%;
`;

function Hero() {
  return (
    <StyledHero>
      <HeroContentBox>
        <Title>Mantas Flowers</Title>
        <Subtitle>Inovative flower selling app</Subtitle>
      </HeroContentBox>
    </StyledHero>
  );
}

export default Hero;
