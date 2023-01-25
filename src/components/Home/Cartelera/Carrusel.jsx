import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './carrusel.css'
import styled from "styled-components";

const SliderInicio = styled.div`
    img{
      width: 10%;
    }
`;

export function Carrusel() {
  return (
  <SliderInicio>
    <Carousel>
        <div>
          <img src="https://i.ibb.co/f2vFNMt/Imagen-de-Whats-App-2023-01-25-a-las-10-33-29.jpg" alt="Carrusel3"/>
        </div>
        <div>
          <img src="https://i.ibb.co/NZwjR3Y/17991570-655376927998451-4584939900448497464-o.jpg" alt="Carrusel1"/>
        </div>
        <div>
          <img src="https://i.ibb.co/kKMzW4B/296318675-2018732408329556-3741784381600743499-n.jpg" alt="Carrusel4"/>
        </div>
    </Carousel>
  </SliderInicio>
)
}
