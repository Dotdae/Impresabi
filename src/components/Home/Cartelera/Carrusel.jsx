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
          <img src="https://i.ibb.co/X7CqDsW/102830607-1410787355790734-8788977416744730624-n.jpg" alt="Carrusel2" />
        </div>
        <div>
          <img src="https://i.ibb.co/fd6qWsF/293446068-2007515116117952-4836350716607153691-n.jpg" alt="Carrusel3"/>
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
