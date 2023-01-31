import {Carrusel} from '../components/Home/Cartelera/Carrusel';
import {Mapa} from '../components/Home/Mapa/Mapa'
import{Whats} from '../components/Whats/Whats'
import { InfoEmpresa } from "../components/Home/InfoEmpresa/InfoEmpresa";
import { Services } from '../components/Home/Services/Services';
import { CartelerasMuestras } from '../components/Home/Cartelera/Muestras';
import {Rotulacion} from '../components/Home/Rotulacion/Rotulacion'
export function Home() {
  return(
    <>
        <Carrusel/>
        <Services/>
        <InfoEmpresa/>
        <CartelerasMuestras/>
        <Mapa/>
        <Whats/>
    </>
  );
}

export function Servicios() {
  return (
    <>
      <Services/>
    </>
  
  );
}

export function About() {
  return(
      <InfoEmpresa/>
      
  );
      
}

export function Rotulos(){
  return(
      <Rotulacion/>
    )
}

