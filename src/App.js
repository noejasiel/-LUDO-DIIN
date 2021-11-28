import Registro from "./pages/Registro";
import Cursos from "./pages/Cursos";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Successful from "./pages/successful";
import Unsuccessful from "./pages/Unsuccessful";
import React from "react";
import RequiredAuth from "./routes/RqeuiredAuth.routes";
import Curso from './pages/Curso';
import Ludodiin from './pages/Ludoddiin'

const App = () => (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/iniciar-sesion" component={Login} />
      <Route path="/registrar" component={Registro} />
      <Route path="/ludodiin" component={Ludodiin} />
  </Router>
);

export default App;
