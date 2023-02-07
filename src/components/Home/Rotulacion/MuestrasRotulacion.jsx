import styled from "styled-components";

const MuestrasContainer = styled.div`
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

export function MuestrasRotulacion(){
    return(
        <MuestrasContainer>
                <CardMuestra>
                    <img src="https://i.ibb.co/LQfSQJD/rotulacion-muestra2.jpg" alt="Rotulacion1"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/YdgbMTc/Whats-App-Image-2022-12-03-at-3-20-03-PM.jpg" alt="Rotulacion2"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/FB1rR7v/rotulacion-muestra5.jpg" alt="Rotulacion3"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/Qd9pVSb/Whats-App-Image-2022-12-21-at-2-51-16-PM.jpg" alt="Rotulacion4"/>
                </CardMuestra>
        </MuestrasContainer>
    )
}