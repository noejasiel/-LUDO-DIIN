import React from "react";
import user2 from "../assets/user2.svg";
import backIcon from "../assets/back.svg"
import { Link } from "react-router-dom";

const Nav_vista3 = () => {
  return (
    <header>
      <nav className="flex justify-between px-14 py-20">
        <h1 className="text-5xl ml-5 text-white font-bold">LUDODIIN</h1>
        <div className=" flex content-end items-center mr-5">
          <Link to="/ludodiin/cursos" className=" mr-5 text-white flex content-center"><img src={backIcon}/> Regresar a cursos</Link>
          <img className="mr-5" width="60" src={user2} alt="icon-back"/>
        </div>
      </nav>
    </header>
  );
};

export default Nav_vista3;