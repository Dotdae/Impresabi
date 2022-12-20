import {Carrusel} from '../components/Home/Cartelera/Carrusel';
import {Mapa} from '../components/Home/Mapa/Mapa'
import{Whats} from '../components/Whats/Whats'
import { InfoEmpresa } from "../components/Home/InfoEmpresa/InfoEmpresa";

export function Home() {
  return(
    <>
        <Carrusel/>
        <InfoEmpresa/>
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
