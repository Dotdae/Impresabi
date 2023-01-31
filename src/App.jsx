import { BrowserRouter, Routes, Route } from "react-router-dom";
// Páginas.

import { Home, Servicios, About, Rotulos } from "./pages";

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
        <Route path="/letras" element={"Letras"}/>
        <Route path="/rotulacion" element={<Rotulos/>}/>
      </Routes>
      <Whats/>
      <Footer/>
    </BrowserRouter>
  );
}
