import React from "react";
import imgLgbt from "../assets/lgbti_Home.png";

const Somos = () => {
  return (
    <div className="w-full flex justify-center items-center  p-6 bg-red-600">
      <img src={imgLgbt} />
      <div className="w-2/4  mt-10 ">
        <h1 className="text-center text-white">¿Quiénes somos? </h1>
        <p className="w-3/4 text-center m-auto text-white ">
          Somos un emprendimiento social y tecnológico a favor de la inclusión
          laboral de personas con discapacidad y limitaciones salud para la
          incorporación el mundo laboral. Por eso, orientamos a LUDODIN
          explicarle a Recursos humanos y sociedad civil el diagnostico,
          desarrollo, implementación y evaluación de la inclusión laboral dentro
          de su empresa o institución basando en contenidos formativos lúdicos y
          accesibles.
        </p>
      </div>
    </div>
  );
};

export default Somos;
