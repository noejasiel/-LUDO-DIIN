import React from "react";
import user2 from "../assets/user2.svg";
import {Link, useRouteMatch} from 'react-router-dom';

const Nav_vista2 = () => {
  let {path} = useRouteMatch()
  console.log(path);
  return (
    <header>
      <nav className="flex justify-between px-14 py-20 bg">
        <h1 className="text-5xl font-bold ml-5 text-white">LUDODIIN</h1>
        <div className=" flex justify-center items-center mr-5 bg-white rounded-md">
          <Link to={`/perfil`} className="font-bold  p-5 text-blue-900 hover:bg-blue-900 hover:text-white">Perfil</Link>
          <Link to={`${path}/cursos`} className="font-bold  p-5 text-blue-900 hover:bg-blue-900 hover:text-white">Cursos</Link>
          <Link to={`/comunidad`} className="font-bold  p-5 text-blue-900 hover:bg-blue-900 hover:text-white">Comunidad</Link>
        </div>
          <img className="font-bold mr-5" width="60" src={user2} alt="icon"/>
      </nav>
    </header>
  );
};

export default Nav_vista2;
