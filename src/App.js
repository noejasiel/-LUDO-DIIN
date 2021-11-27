import Registro from "./components/Registro";
import Cursos from "./components/Cursos";
import {Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/login'
import Home from "./pages/Home";

const App = ()=>(
  <BrowserRouter>
    <Routes>
      <Route path="/iniciar-sesion" element={<Login/>}/>
      <Route path="/registrar" element={<Registro/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;