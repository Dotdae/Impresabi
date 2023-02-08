import styled from "styled-components"
import { Link } from "react-router-dom";
const Ul = styled.ul`

    display: none;
   

    @media (min-width: 375px) and (max-width: 768px){

        list-style: none; 
        display: flex;
        flex-flow: row nowrap;

        li, a {

            padding: 18px 30px;
            color: #FFF;


        }


        flex-flow: column nowrap;
        background-color:  #d30226;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        z-index: 3;
        transition: trasnform 0.3s ease-in-out;


    }

`;
const ImageLogo = styled.div`
    
`;

export function RightNav({open}){
    return(
        <Ul open ={open}>
            <li><Link to="/">Inicio</Link> </li>
            <li><Link to="/Servicios">Servicios</Link></li>
            <li><a href="/Contact">Contacto</a></li>
            <li><a href="/About">Acerca de</a></li>
        </Ul>
    )
}