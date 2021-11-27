import React, { useEffect } from "react";
import Nav2 from "../components/Nav_vista2";
import Card from "../components/Card.jsx";

const Cursos = () => {

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if (!user) {
      return window.location.href = "/iniciar-sesion"
    }
  })
  
  return (
    <div className="bg-blue-900 h-screen">
      <Nav2 />
      <h1 className="text-center mt-6 mb-6 text-white font-bold text-3xl">Cursos de Inclusion</h1>
      <div className="flex flex-col pb-10 ">
        <div className="w-full flex justify-around mt-10 h-56 box-content">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
        <div className="w-full flex justify-around mt-10">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
