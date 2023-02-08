import { AiFillPrinter } from "react-icons/ai";
import { RxLetterCaseCapitalize } from 'react-icons/rx'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiFolderUserLine } from 'react-icons/ri'
import styled from "styled-components";
import 'react-before-after-slider-component/dist/build.css';
import { BrowserRouter, Link } from "react-router-dom";

const ServicesConteiner = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: -10px;
    position: relative;
    padding-top: 15px;

`;

const IconContainer = styled.li`

    width: 200px;
    height: 150px;
    background-color: #E2E2E2;
    box-shadow: 0 0 3px rgba(0,0,0,0.33);
    margin: 20px;
    display: inline-block;
    position: relative;
    cursor: pointer;

    &:before{

        content: " ";
        width: 100%;
        height: 5px;
        bottom: 0;
        display: inline;
        transition: height 0.5s;

    }

    &:hover:before{

            height: 100%;

    }
    
    &:hover{

        color: #E2E2E2;
            font-size: 16px;
            font-weight: 600;

    }

    .impresion, .letras, .rotulacion, .cartelera{

        position: absolute;
        top: -80px;
        left: 75px;
        color: #D30226;
        width: 50px;
        height: 50px;

    }

    .impresion:hover, .letras:hover, .rotulacion:hover, .cartelera:hover{



    }


    a{

        text-align: center;
        font-size: 16px;
        font-weight: 600;
        color: #d30226;
        display: block;
        position: absolute;
        bottom: 5px;
        width: 100%;
        transition: color 0.25s;

        &:before{

            color: #e2e2e2;
            font-size: 40px;
            line-height: 70px;
            content: "\f004";
            width: 64px;
            height: 64px;
            border-radius: 64px;
            position: absolute;
            bottom: 10px;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            background-color:  #e2e2e2;
            transition: color 0.25s, background-color 0.25s;

        }

        &:hover{

            color: #E2E2E2;
            font-size: 16px;
            font-weight: 600;

        }

    }

`;


export function Services() {
  return (
    <ServicesConteiner>
        <ul className="">
            <IconContainer><Link to="/ImpresionHD"><AiFillPrinter className="impresion"/>Impresión HD</Link></IconContainer>
            <IconContainer><Link to="/Letras"><RxLetterCaseCapitalize className="letras"/>Letras 3D</Link></IconContainer>
            <IconContainer><Link to="/Rotulacion"><TbTruckDelivery className="rotulacion"/>Rotulación</Link></IconContainer>
            <IconContainer><Link to="/Carteleras"><RiFolderUserLine className="cartelera"/>Impresión a Gran Formato</Link></IconContainer>
        </ul>   
    </ServicesConteiner>
  )
}
