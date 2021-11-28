import React from "react";
import user2 from "../assets/user2.svg";

const Nav_vista2 = () => {
  return (
    <header>
      <nav className="flex justify-between px-14 py-20 bg">
        <h1 className="text-5xl font-bold ml-5 text-white">LUDODIIN</h1>
        <div className=" flex justify-center items-center mr-5 bg-white rounded-md">
          <a className="font-bold  mr-5 text-blue-900">Perfil</a>
          <a className="font-bold  mr-5 text-blue-900">Cursos</a>
          <a className="font-bold  mr-5 text-blue-900">Comunidad</a>
        </div>
          <img className="font-bold mr-5" width="60" src={user2} />
      </nav>
    </header>
  );
};

export default Nav_vista2;
