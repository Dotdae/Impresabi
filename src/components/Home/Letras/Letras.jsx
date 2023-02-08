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
        
            <LetraContainer>
                <CardMuestra>
                    <img src="https://i.ibb.co/LN4fCnY/letras1.jpg" alt="Letras1"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/7X0TkGj/letras2.jpg" alt="Letras2"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/CMH9gZY/letras3.jpg" alt="Letras3"/>
                </CardMuestra>
                <CardMuestra>
                    <img src="https://i.ibb.co/Lnt4p3T/letras4.jpg" alt="Letras4"/>
                </CardMuestra>
            </LetraContainer>
        </LetreroContainer>

    )
}