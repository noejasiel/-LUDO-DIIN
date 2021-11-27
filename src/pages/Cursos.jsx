import React from "react";
import Nav2 from "../components/Nav_vista2";
import Card from "../components/Card.jsx";

const Cursos = () => {
  const curso = [
    {
      id: 0,
      titulo: "1. Conociendo la discapacidad",
      descripcion:
        "Conocer los conceptos básicos sobre la discapacidad y sus tipos.",
      img: "bg-img-card1",
    },
    {
      id: 1,
      titulo: "2. Acercamiento a nociones de Inclusión Laboral en Mexico",
      descripcion:
        "Explicar las nociones teóricas de la inclusión laboral en Mexico para un acercamiento al buen trato de personas con discapacidad.",
      img: "bg-img-card1",
    },
    {
      id: 2,
      titulo: "3. Reclutamiento y selección inclusiva",
      descripcion:
        "Comprender el proceso de reclutamiento y selección inclusivo adecuado en la empresa.",
      img: "bg-img-card1",
    },
    {
      id: 0,
      titulo: "1. Conociendo la discapacidad",
      descripcion:
        "Conocer los conceptos básicos sobre la discapacidad y sus tipos.",
      img: "bg-img-card1",
    },
    {
      id: 1,
      titulo: "2. Acercamiento a nociones de Inclusión Laboral en Mexico",
      descripcion:
        "Explicar las nociones teóricas de la inclusión laboral en Mexico para un acercamiento al buen trato de personas con discapacidad.",
      img: "bg-img-card1",
    },
    {
      id: 2,
      titulo: "3. Reclutamiento y selección inclusiva",
      descripcion:
        "Comprender el proceso de reclutamiento y selección inclusivo adecuado en la empresa.",
      img: "bg-img-card1",
    },
  ];
  return (
    <div className="bg-blue-900">
      <Nav2 />
      <h1 className="text-center mt-6 mb-6 text-white text-4xl mb-12">
        Cursos de Inclusion
      </h1>
      <div className="flex flex-col pb-10 ">
        <div className="w-full grid grid-cols-3 gap-3 ">
          {curso.map((c) => (
            <div className="mb-7 ">
              <Card curso={c} />
            </div>
          ))}
        </div>
        {/* <div className="w-full flex justify-around mt-10">
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Cursos;
