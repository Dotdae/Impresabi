import styled from "styled-components";
const CardsContainer = styled.div`
        display: flex;
        grid-template-columns: repeat(6, 1fr);
        width: 90%;
        margin: 5%;
        grid-gap: 30px;
        background-color: blue;


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
export function CartelerasMuestras(){
    return(
            <CardsContainer>
                
                <CardMuestra>
                <img src="https://i.ibb.co/z5hwyvS/Whats-App-Image-2022-12-07-at-8-27-43-AM.jpg" alt="Cartelera9"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/P6DdkQ4/cartelera-muestra2.jpg" alt="Cartelera1"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/djTZK96/Whats-App-Image-2022-11-12-at-1-39-19-PM.jpg" alt="Cartelera3"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/Hnz1Frz/Whats-App-Image-2022-11-23-at-12-11-16-PM.jpg" alt="Cartelera4"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/HPyRrP4/Whats-App-Image-2022-11-02-at-2-24-40-PM.jpg" alt="Cartelera5"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/5xRfshm/Whats-App-Image-2022-12-20-at-9-16-16-AM.jpg" alt="Cartelera6"/>
                </CardMuestra>
            </CardsContainer>
            
        )
}

