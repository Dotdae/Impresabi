import styled from "styled-components";
const CardsContainer = styled.div`
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

const ContainerInfo = styled.div`

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
                    <img src="https://i.ibb.co/DbYGW8K/Whats-App-Image-2022-11-02-at-9-09-55-AM.jpg"  alt="Letras1" />
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/5W5TWLk/Whats-App-Image-2022-11-05-at-2-52-15-PM.jpg" alt="Letras3"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/vBGDKtJ/Imagen-de-Whats-App-2023-01-07-a-las-11-14-49.jpg" alt="Neon1"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/bgqtNRM/Imagen-de-Whats-App-2023-01-07-a-las-11-4-50.jpg" alt="Neon2"/>

                </CardMuestra>
            </CardsContainer>
            
        )
}

