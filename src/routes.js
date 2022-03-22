import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Formulario from './pages/Formulario';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/formulario/:idUsuario" element={<Formulario />} />
    </Routes>
  );
};

