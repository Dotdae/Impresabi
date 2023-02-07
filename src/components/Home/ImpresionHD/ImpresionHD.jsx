import styled from "styled-components";

const PrintContainer = styled.div`
        display: flex;
        grid-template-columns: repeat(5, 1fr);
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

export function ImpresionHD(){
    return(
        <PrintContainer>
                <CardMuestra>
                    <img src="https://i.ibb.co/3SFVcsv/Whats-App-Image-2023-01-13-at-4-26-56-PM.jpg" alt="ImpresionHD1"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/F810ykR/Whats-App-Image-2023-02-01-at-5-16-45-PM.jpg" alt="ImpresionHD2"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/VMCrzCf/Imagen-de-Whats-App-2023-02-03-a-las-14-45-41.jpg"  alt="ImpresionHD3" />
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/H2cwLCP/Whats-App-Image-2022-12-23-at-1-38-20-PM.jpg" alt="ImpresionHD4"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/X7X8M7X/Imagen-de-Whats-App-2023-02-07-a-las-08-39-40.jpg" alt="ImpresionHD5"/>
                </CardMuestra>
        </PrintContainer>
    )
}