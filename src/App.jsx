import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/letras" element={<Letreros/>}/>
        <Route path="/rotulacion" element={<Rotulos/>}/>
        <Route path="/carteleras" element={<Carteleras/>}/>
        <Route path="/impresionHD" element={<PrintHD/>}/>
      </Routes>
      <Whats/>
      <Footer/>
    </BrowserRouter>
  );
}
