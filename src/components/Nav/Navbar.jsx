import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Burguer } from "./Burger";

const Nav = styled.nav`

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 85px;
    padding: 0 20px;
    padding-top: 15px;
    background-color: #e2e2e2;

    .logo{

        img{

            width: 130px;
            cursor: pointer;

        }
    }

    nav{

        ul{

            margin-top: 25px;

            li{

                list-style: none;
                display: inline-block;
                margin: 0 20px;
                position: relative;

                a{

                    text-decoration: none;
                    color: black;
                    font-family: Roboto, "sans-serif";
                    font-size: 1.2rem;

                }

                &::before{

                    content: "";
                    height: 3px;
                    width: 0%;
                    background: #d30226;
                    position: absolute;
                    left: 0;
                    bottom: -12px;
                    transition: 0.4s ease-out;

                }

                &:hover::before{

                    width: 100%;

                }

            }

        }


    }

    @media (min-width: 375px) and (max-width: 768px){

        .nav-menu{
            display: none;
        }

    }


`



export function Navbar(){

    return(
        <Nav>
            <div className="logo">
                <Link to={"/"}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="nav-menu">
                <nav>
                    <ul>
                        <li className="nav-item">
                            <Link to={"/"}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/servicios"}>Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/contact">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"}>Acerca de</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Burguer/>
        </Nav>
    )

}