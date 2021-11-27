import React from "react";
import user2 from "../assets/user2.svg";
import backIcon from "../assets/back.svg"

const Nav_vista3 = () => {
  return (
    <header>
      <nav className="flex justify-between pt-4">
        <h1 className="text-5xl ml-5 text-white">LUDODIIN</h1>
        <div className=" flex content-end items-center mr-5">
          <a className=" mr-5 text-white flex content-center"><img src={backIcon}/> Regresar a cursos</a>
          <img className="mr-5" width="60" src={user2} />
        </div>
      </nav>
    </header>
  );
};

export default Nav_vista3;