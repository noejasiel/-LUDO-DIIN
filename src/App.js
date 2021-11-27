import Registro from "./pages/Registro";
import Cursos from "./pages/Cursos";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Successful from "./pages/successful";
import Unsuccessful from "./pages/Unsuccessful";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/iniciar-sesion" element={<Login />} />
      <Route path="/registrar" element={<Registro />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/successful" element={<Successful />} />
      <Route path="/unsuccessful" element={<Unsuccessful />} />
    </Routes>
  </BrowserRouter>
);

export default App;
