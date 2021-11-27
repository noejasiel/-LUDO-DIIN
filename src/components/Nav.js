import React from "react";

const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between pt-4">
        <h1 className="text-5xl ml-5 text-white">LUDODIIN</h1>
        <div className=" flex content-end items-center mr-5">
          <a className=" mr-5 text-white">Inicio</a>
          <a className=" mr-5 text-white">Iniciar Sesion</a>
          <a className=" mr-5 text-white">Registrarse</a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
