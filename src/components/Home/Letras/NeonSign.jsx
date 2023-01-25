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

const NeonMuestras = styled.div`
        display: flex;
        grid-template-columns: repeat(6, 1fr);
        width: 90%;
        margin: 5%;
        grid-gap: 30px;

`;
const CardMuestra = styled.div`
        img{
            width: 100%;
            transition: all 300ms;
            position: relative;

            &:hover{
                transform: scale(1.20)
            }
        }
`;
export function Neon() {
  return (
    <Container>
      <h1>
        <NeonRed>Letreros</NeonRed> 
        <NeonBlue>Neon</NeonBlue>
      </h1>
      <NeonMuestras>
            <CardMuestra>
                <img src="https://i.ibb.co/SchCYHt/Imagen-de-Whats-App-2023-01-25-a-las-12-10-54.jpg" alt="Neon1"/>
            </CardMuestra>
            <CardMuestra>
                  <img src="https://i.ibb.co/bs1ptVB/sfdzfdfd.jpg" alt="Neon2"/>
            </CardMuestra>
            <CardMuestra>
                  <img src="https://i.ibb.co/5YntrWQ/Imagen-de-Whats-App-2023-01-25-a-las-12-10-53.jpg" alt="Neon3"/>
            </CardMuestra>
            <CardMuestra>
                  <img src="https://i.ibb.co/r3JFJp2/asaww.jpg" alt="Neon4"/>
            </CardMuestra> 
      </NeonMuestras>
    </Container>
  );
}
