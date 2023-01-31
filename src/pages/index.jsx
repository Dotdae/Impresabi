import {Carrusel} from '../components/Home/Cartelera/Carrusel';
import {Mapa} from '../components/Home/Mapa/Mapa'
import{Whats} from '../components/Whats/Whats'
import { InfoEmpresa } from "../components/Home/InfoEmpresa/InfoEmpresa";
import { Services } from '../components/Home/Services/Services';
export function Home() {
  return(
    <>
        <Carrusel/>
        <Services/>
        <InfoEmpresa/>
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
      <h1> a</h1>
  );
      
}

