import styled from "styled-components";
import vidio from "../../../assets/video.mp4";
const MapContainer = styled.div`

    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 25px;
    width: 90%;

    iframe{

        width: 100%;

    }

    @media (min-width: 375px) and (max-width: 768px){

        flex-direction: column;

    }

`;

const Info = styled.div`

    text-align: center;
    background-color: #d30226;
    width: 100%;
    padding-top: 15px;
    h3{
        color: white;
        padding: 5px;
    }
    span{
        color: white;
        
    }
    @media (min-width: 375px) and (max-width: 768px){

        height: 350px;

        .info-text{
            margin-top: 20px;
        }       
    }

`;

const VideoFachada = styled.div`
    video{
        display:flex;
        width: 100%;
        height: 300px;
        margin-top: 10px;
        padding: 10px;
    }

    @media (min-width: 375px) and (max-width: 768px){

        video{

            height: 150px;
        }

    }
`;

export function Mapa() {
  return (
    <MapContainer>
         <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.2262197918217!2d-109.00700568497842!3d25.796109883621174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba25fc345e26c7%3A0xa8906c733e06eaa3!2sImpres%20ABI!5e0!3m2!1ses-419!2smx!4v1661025527389!5m2!1ses-419!2smx"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        <Info class="container-info-ubication">
            <div className="info-text">
                <h3>Nos encontramos en:</h3>
                <span> Av. Independencia 1430, Jardines del Valle, 81245 Los Mochis, Sin</span>
                <h3> Nuestro horario es:</h3>
                <span><strong>Lunes a Viernes:</strong>Sabados: 8:00 AM - 14:00 PM </span>
                <br />
                <span><strong>Sabado:</strong> Sabados: 8:00 AM - 14:00 PM </span>
            </div>
            <VideoFachada>
                <video autoPlay loop>
                    <source src={vidio}/>
                </video>
            </VideoFachada>
        </Info>
    </MapContainer>
  )
}
