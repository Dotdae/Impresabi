import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas.

import { Home, Servicios, About } from "./pages";

// Componentes.

import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
