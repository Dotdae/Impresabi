
import styled from "styled-components";
import { MdOutlinePriceCheck} from "react-icons/md";
import { FiPenTool } from "react-icons/fi";
import { FaTools } from "react-icons/fa";

const Quienes = styled.div`
        
        display: block;
        height: 600px;
        margin: 25px;
        text-align: center;
        h3{
            color: #d30226;
            font-size:  40px;
            padding: 10px;
        
        }
        @media (max-width: 800px) {
            height: auto;
        }
`;

const IconContainer = styled.div`
        display: flex;
        gap: 25px;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150px;
        margin-top: 5px;
        @media (max-width: 800px) {
            flex-wrap: wrap;
            width: 90%;
        }
`;

const InfoIcon = styled.div`
        text-align: center;
        color: #d30226;
        .icon-style{
            font-size: 45px;
        }
        p{
            font-size: 25px;
        }
        @media (max-width: 800px) {
            .icon-style {
                font-size: 30px;
            }
            p {
                font-size: 20px;
            }
        }
`;

const DatoEmpresa = styled.div`
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        background-color:#d30226;
        width: 60%;
        height: 150px;
        justify-content: center;
        align-items: center;
        p{
            font-size: 20px;
            padding: 10px;
            margin: 10px;
            color: white;
            
        }
        @media (max-width: 800px) {
            width: 90%;
            height:auto;
        }
`;


const VisionMision = styled.div`
        display: flex;
        width: 100%;
        gap: 25px;
        justify-content: center;
        text-align: center;
`;

const InfoVM = styled.div`
        display: block;
        width: 80%;
        height: 200px;
        color: #d30226;
        justify-content:center;
    
        .icon-style{
            font-size: 60px;
            margin-top: 5px; 
        }
        h3{
            font-size: 30px;
            padding-top: 25px;
        }

        p{
            font-size: 20px;
            padding: 15px; 
        }
`;

export function InfoEmpresa(){
    return(
    <Quienes>
        <h3>¿QUIENES SOMOS?</h3>
        <IconContainer>
            <InfoIcon>
                <MdOutlinePriceCheck className="icon-style"/>
                <p>COTIZAMOS</p>
            </InfoIcon>
            <InfoIcon>
                <FaTools className="icon-style"/>
                <p>INSTALAMOS</p>
            </InfoIcon>
            <InfoIcon>
                <FiPenTool className="icon-style"/>
                <p>DISEÑAMOS</p>
            </InfoIcon>
        </IconContainer>
        
        <DatoEmpresa>
            <p> En <b>ImpresABI</b> buscamos ser la mejor empresa en la creación de imagen, utilizando materiales de calidad para de esta manera lograr la satisfacci&oacute;n de nuestros clientes.</p>
        </DatoEmpresa>
        <VisionMision>
            <InfoVM>
                <h3 className="title">MISIÓN</h3>
                <p>Lograr un crecimiento y una mayor participaci&oacute;n en el mercado de la impresi&oacute;n, dejando huella en cada uno de nuestros clientes.</p>
            </InfoVM>
            <InfoVM>
                <h3 className="title">VISIÓN</h3>
                <p>Ser la mejor empresa en la creaci&oacute;n de imagen, utilizando materiales de calidad para de esta manera lograr la satisfacci&oacute;n de nuestros clientes.</p>
            </InfoVM>
        </VisionMision>
        
    </Quienes>
    
    )
}
