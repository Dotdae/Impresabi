import { BrowserRouter, Routes, Route,} from "react-router-dom";
// Páginas.

import { Home, Servicios, About, Rotulos, Carteleras, Letreros, PrintHD, Contact } from "./pages";

// Componentes.

import { Navbar } from "./components/Nav/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Whats } from "./components/Whats/Whats";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Servicios" element={<Servicios/>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Letras" element={<Letreros/>}/>
        <Route path="/Rotulacion" element={<Rotulos/>}/>
        <Route path="/Carteleras" element={<Carteleras/>}/>
        <Route path="/ImpresionHD" element={<PrintHD/>}/>
      </Routes>
      <Whats/>
      <Footer/>
    </BrowserRouter>
  );
}
