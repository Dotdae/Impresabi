// NeonSign.js
import React from 'react';
import styled from 'styled-components';

const NeonRed = styled.i`
  font-family: "neon-tubes-2-regular", sans-serif;
  --neon: hsl(355 100% 95%);
  --neon-glow: hsl(355 98% 40%);
  color: var(--neon);
  text-shadow: 
    0 0 20px var(--neon-glow),
    0 0 2.5vmin var(--neon-glow),
    0 0 5vmin var(--neon-glow),
    0 0 10vmin var(--neon-glow),
    0 0 15vmin var(--neon-glow);
    margin-right: 10px;
`;
const NeonBlue = styled.i`
  font-family: "neon-tubes-2-regular", sans-serif;
  --neon: hsl(192 100% 95%);
  --neon-glow: hsl(194 100% 40%);
  color: var(--neon);
  text-shadow: 
    0 0 20px var(--neon-glow),
    0 0 2.5vmin var(--neon-glow),
    0 0 5vmin var(--neon-glow),
    0 0 10vmin var(--neon-glow),
    0 0 15vmin var(--neon-glow);
    margin-left: 10px;
`;
const Container = styled.div`
    @font-face {
      font-family: "neon-tubes-2-regular";
      src:
        url("https://assets.codepen.io/2585/NeonTubes2.otf") format("woff"),
        url("https://assets.codepen.io/2585/NeonTubes2.otf") format("opentype"),
        url("https://assets.codepen.io/2585/NeonTubes2.otf") format("truetype")
      ;
    }
  text-align: center;
  font-size: 50px;
  font-weight: normal;
  display: grid;
  justify-content: center;
  align-items: center;
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
