import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between px-14 py-20">
        <h1 className="text-5xl ml-5 text-white font-bold">LUDODIIN</h1>
        <div className=" flex content-end items-center mr-5">
          <Link to="/" className=" mr-5 text-white font-medium">Inicio</Link>
          <Link to="/iniciar-sesion" className=" mr-5 text-white font-medium">Iniciar Sesion</Link>
          <Link to="/registrar" className=" mr-5 text-white font-medium">Registrarse</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
