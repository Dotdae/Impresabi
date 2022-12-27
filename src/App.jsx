import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas.

import { Home, Servicios, About } from "./pages";

// Componentes.

import { Navbar } from "./components/Nav/Navbar";
import { Footer } from "./components/Footer/Footer";
import { CartelerasMuestras } from "./components/Home/Cartelera/Muestras";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <CartelerasMuestras/>
      <Footer/>
    </BrowserRouter>
  );
}
