import styled from "styled-components";

const LetreroContainer = styled.div`
    
    h1{
        text-align: center;
        font-size: 50px;
        font-family: "Roboto";
        color: #d30226;
    }
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

export function Letras(){
    return (
        <LetreroContainer>
            <h1>Letras</h1>
            <LetraContainer>
                <CardMuestra>
                    <img src="https://i.ibb.co/yN1vsSx/Imagen-de-Whats-App-2023-01-25-a-las-10-27-33.jpg" alt="Letras1"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/kGd3f0F/letras-muestra2.jpg" alt="Letras2"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/MZC9bvx/Whats-App-Image-2022-11-12-at-2-36-28-PM-2.jpg" alt="Letras3"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/r21Ktz6/Whats-App-Image-2022-11-26-at-1-59-42-PM.jpg" alt="Letras4"/>
                </CardMuestra>
            </LetraContainer>
        </LetreroContainer>

    )
}