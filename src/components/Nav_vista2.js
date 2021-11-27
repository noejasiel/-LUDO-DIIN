import React from "react";
import user2 from "../assets/user2.svg";

const Nav_vista2 = () => {
  return (
    <header>
      <nav className="flex justify-between pt-4">
        <h1 className="text-5xl ml-5 text-white">LUDODIIN</h1>
        <div className=" flex content-end items-center mr-5">
          <a className=" mr-5 text-white">Oportunidades</a>
          <a className=" mr-5 text-white">Oportunidades</a>
          <a className=" mr-5 text-white">Oportunidades</a>
          <img className="mr-5" width="60" src={user2} />
        </div>
      </nav>
    </header>
  );
};

export default Nav_vista2;
