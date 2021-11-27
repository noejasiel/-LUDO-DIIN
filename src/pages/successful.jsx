import React from "react";
import successful from "../assets/star.png";

const Successful = () => (
  <div className="w-full h-screen flex justify-center items-center flex-col bg-blue-900">
    <img src={successful} width="400" />
    <h1 className="mt-5">Has aprobado el curso de </h1>
    <h1>“Conociendo la discapacidad”</h1>
    <button className="bg-white text-blue-900 rounded-lg mt-5 pt-2 pb-2 pl-5 pr-5">
      Continuar
    </button>
  </div>
);

export default Successful;
