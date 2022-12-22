import styled from "styled-components";
import { SlNote } from "react-icons/sl";
import { RiPenNibLine } from "react-icons/ri";
import { BsImages } from "react-icons/bs";
import { IoIosRocket} from "react-icons/io";
import {IoEyeOutline } from "react-icons/io5";

const Quienes = styled.div`
        background-color:#e2e2e2;
        width: 100%;
        height: 300px;
        border: 1px solid red;
        margin: 25px;
        text-align: center;

        h3{
            color: #d30226;
            font-size:  40px;
        
        }
    
`;

const IconContainer = styled.div`
        display: flex;
        gap: 25px;
        justify-content: center;
        align-items: center;
        border: 1px solid blue;
        width: 100%;
        height: 150px;
        margin-top: 5px;
`;

const InfoIcon = styled.div`

        text-align: center;
        color: red;

        .icon-style{
            width: 50px;
            height: 20px;
            
        }

        p{
            font-size: 25px;
        }
`;

const VisionMision = styled.div`
        display: flex;
        border: 1px solid cyan;
        width: 100%;
        justify-content: center;
        text-align: center;
`;

const InfoVM = styled.div`
    
`;

export function InfoEmpresa(){
    return(
    <Quienes>
        <h3>QUIENES SOMOS</h3>
        <IconContainer>
            <InfoIcon>
                <RiPenNibLine className="icon-style"/>
                <p>DISEÑAMOS</p>
            </InfoIcon>
            <InfoIcon>
                <BsImages className="icon-style"/>
                <p>INSTALAMOS</p>
            </InfoIcon>
            <InfoIcon>
                <SlNote className="icon-style"/>
                <p>COTIZAMOS</p>
            </InfoIcon>
        </IconContainer>
        
        <VisionMision>
            <InfoVM>
            <p>Ser la mejor empresa en la creación de imagen, utilizando materiales de calidad para de esta manera lograr la satisfacci&oacute;n de nuestros clientes.</p>
            </InfoVM>
        </VisionMision>
        
    </Quienes>
    
    )
}
