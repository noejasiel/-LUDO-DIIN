import React from "react";
import unsuccessful from "../assets/unsuccelful.png";

const Unsuccessful = () => (
  <div className="w-full h-screen flex justify-center items-center flex-col bg-blue-900">
    <img src={unsuccessful} width="400" alt="icon" />
    <h1 className="mt-5 text-white">No aprobaste el curso</h1>
    <h1 className="text-white">“Conociendo la discapacidad”</h1>
    <h1 className="text-white ">6/10</h1>
    <div className="flex">
      <button className="bg-white text-white rounded-lg mt-5 pt-2 pb-2 pl-5 pr-5 mr-16 bg-green-700">
        Reintentar
      </button>
      <button className="bg-white text-blue-900 rounded-lg mt-5 pt-2 pb-2 pl-5 pr-5">
        Continuar
      </button>
    </div>
  </div>
);

export default Unsuccessful;
