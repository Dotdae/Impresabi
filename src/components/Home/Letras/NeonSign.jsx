// NeonSign.js
import React from 'react';
import styled from 'styled-components';
import './fonts/Neonderthaw-Regular.ttf';
const NeonRed = styled.i`
  --neon: hsl(355 100% 95%);
  --neon-glow: hsl(355 98% 40%);
  color: var(--neon);
  text-shadow: 
    0 0 20px var(--neon-glow),
    0 0 2.5vmin var(--neon-glow),
    0 0 5vmin var(--neon-glow),
    0 0 10vmin var(--neon-glow),
    0 0 15vmin var(--neon-glow);
`;
const NeonBlue = styled.i`
  --neon: hsl(192 100% 95%);
  --neon-glow: hsl(194 100% 40%);
  color: var(--neon);
  text-shadow: 
    0 0 20px var(--neon-glow),
    0 0 2.5vmin var(--neon-glow),
    0 0 5vmin var(--neon-glow),
    0 0 10vmin var(--neon-glow),
    0 0 15vmin var(--neon-glow);
`;
const Container = styled.div`
    @font-face {
        font-family: "Neonderthaw";
        src: local("Neonderthaw"),
        url("./fonts/Neonderthaw-Regular.ttf") format("truetype");
        font-weight: bold;
    }
  text-align: center;
  font-size: 50px;
  font-weight: normal;
  font-family: "Neonderthaw";
  
  display: grid;
  place-content: center;
`;
export function Neon() {
  return (
    <Container>
      <h1>
        <NeonRed>Letreros</NeonRed> 
        <NeonBlue>Neon</NeonBlue>
      </h1>
    </Container>
  );
}
