import styled from "styled-components";

const LetreroContainer = styled.div`
    
    h1{
        text-align: center;
        font-size: 50px;
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