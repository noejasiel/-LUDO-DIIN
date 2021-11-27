import React from "react";
import Nav2 from "./Nav_vista2";
import Card from "./Card.jsx";

const Cursos = () => {
  return (
    <div className="bg-blue-900">
      <Nav2 />
      <h1 className="text-center mt-6 mb-6 text-white">Cursos de Inclusion</h1>
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
