import {Carrusel} from '../components/Home/Cartelera/Carrusel';
import {Mapa} from '../components/Home/Mapa/Mapa'
import{Whats} from '../components/Whats/Whats'
import { InfoEmpresa } from "../components/Home/InfoEmpresa/InfoEmpresa";
import { Services } from '../components/Home/Services/Services';
import { CartelerasMuestras } from '../components/Home/Cartelera/Muestras';
import { Rotulacion } from '../components/Home/Rotulacion/Rotulacion';
import { Letras } from '../components/Home/Letras/Letras';
import { Neon } from '../components/Home/Neon/Neon';
import { ImpresionHD } from '../components/Home/ImpresionHD/ImpresionHD';
import { MuestrasRotulacion } from '../components/Home/Rotulacion/MuestrasRotulacion';


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
      <Carrusel/>
      <Services/>
    </>
  
  );
}

export function About() {
  return(
      <>
        <InfoEmpresa/>
      </>
  ); 
}

export function Contact(){
  return
}

export function Rotulos(){
  return(
      <>
        <Carrusel/>
        <Rotulacion/>
        <MuestrasRotulacion/>
      </> 
    )
}

export function Carteleras(){
  return(
    <>
      <Carrusel/>
      <CartelerasMuestras/>
    </>
  )
}

export function Letreros(){
  return(
      <>
        <Carrusel/>
        <Letras/>
        <Neon/>
      </>
  )
}

export function PrintHD(){
  return(
      <>
        <Carrusel/>
        <ImpresionHD/>
      </>  
  )
}