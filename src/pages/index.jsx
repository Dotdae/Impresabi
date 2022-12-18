import {Carrusel} from '../components/Home/Cartelera/Carrusel';
import {Mapa} from '../components/Home/Mapa/Mapa'

export function Home() {
  return(
    <>
        <Carrusel/>
        <Mapa/>
    </>
  );
}

export function Servicios() {
  return <div>Esta es la página de servicios</div>;
}

export function About() {
  return <div>Esta es la página about</div>;
}
