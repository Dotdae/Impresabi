
import styled from "styled-components";
import { SlNote } from "react-icons/sl";
import { RiPenNibLine } from "react-icons/ri";
import { BsImages } from "react-icons/bs";

const Quienes = styled.div`
        background-color:#e2e2e2;
        display: block;
        height: 600px;
        border: 1px solid red;
        margin: 25px;
        text-align: center;
        h3{
            color: #d30226;
            font-size:  40px;
            padding: 10px;
        
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
`;

const InfoIcon = styled.div`

        text-align: center;
        color: red;

        .icon-style{
            font-size: 60px;
        }

        p{
            font-size: 25px;
        }
`;

const DatoEmpresa = styled.div`
        display: flex;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: red;
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
        color: red;
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
