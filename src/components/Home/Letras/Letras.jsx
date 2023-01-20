import styled from "styled-components";


const LetreroContainer = styled.div`
    
`;
const LetraContainer = styled.div` 
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

const NeonContainer = styled.div`    
        @font-face {
            font-family: "neon";
            src:
                url(".\src\assets\fonts\NeonRetro.ttf")
            }

            .neon-red {
            --neon: hsl(355 100% 95%);
            --neon-glow: hsl(355 98% 40%);
            }

            .neon-blue {
            --neon: hsl(192 100% 95%);
            --neon-glow: hsl(194 100% 40%);
            }

            h1 > i {
            color: var(--neon);
            text-shadow: 
                0 0 20px var(--neon-glow),
                0 0 2.5vmin var(--neon-glow),
                0 0 5vmin var(--neon-glow),
                0 0 10vmin var(--neon-glow),
                0 0 15vmin var(--neon-glow);
            }

            @media (dynamic-range: high) {
                .neon-red {
                    --neon-glow: color(display-p3 1 0 0);
                }
                
                .neon-blue {
                    --neon-glow: color(display-p3 0 0.75 1);
                }
                
                h1 > i {
                    text-shadow: 
                    0 0 2.5vmin var(--neon-glow),
                    0 0 10vmin var(--neon-glow),
                    0 0 15vmin var(--neon-glow);
                }
            }

            h1 {
                text-align: center;
                font-size: 80px;
                font-weight: normal;
                font-family: "neon";
                }

            .body {
                min-block-size: 100%;
                min-inline-size: 100%;
                margin: 0;
                box-sizing: border-box;
                display: grid;
                place-content: center;
                
                }
`;
export function Letras(){
    return (
        <LetreroContainer>
            <LetraContainer>
                <CardMuestra>
                    <img src="https://i.ibb.co/z5hwyvS/Whats-App-Image-2022-12-07-at-8-27-43-AM.jpg" alt="Cartelera9"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/z5hwyvS/Whats-App-Image-2022-12-07-at-8-27-43-AM.jpg" alt="Cartelera9"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/z5hwyvS/Whats-App-Image-2022-12-07-at-8-27-43-AM.jpg" alt="Cartelera9"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/z5hwyvS/Whats-App-Image-2022-12-07-at-8-27-43-AM.jpg" alt="Cartelera9"/>
                </CardMuestra>
            </LetraContainer>
           
        </LetreroContainer>

    )
}