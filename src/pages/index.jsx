import {Carrusel} from '../components/Home/Cartelera/Carrusel';
import {Mapa} from '../components/Home/Mapa/Mapa'
import{Whats} from '../components/Whats/Whats'

export function Home() {
  return(
    <>
        <Carrusel/>
        <Mapa/>
        <Whats/>
    </>
  );
}

export function Servicios() {
  return <div>Esta es la página de servicios</div>;
}

export function About() {
  return <div>Esta es la página about</div>;
}
