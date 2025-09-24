import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import ListarUsuarios from "./pages/lista";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-blue-600 p-4 text-white shadow-md">
        <h1 className="text-center font-bold text-2xl">Sistema de Usuários</h1>
      </header>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listar-usuarios" element={<ListarUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
