import Registro from "./pages/Registro";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import React from "react";
import Ludodiin from './pages/Ludoddiin'
import Perfil from './pages/Perfil';
import PrivateRouter from './routes/RqeuiredAuth.routes'

const App = () => (
  <Router>
      <Route exact path="/" component={Home} />
      <Route path="/iniciar-sesion" component={Login} />
      <Route path="/registrar" component={Registro} />
      <Route path="/ludodiin" component={Ludodiin} />
      <PrivateRouter path={`/perfil`} component={Perfil}/>
  </Router>
);

export default App;
