import React from "react";

const Card_curso = () => (
  <div className="w-2/3 m-auto bg-img-card1 bg-cover h-full relative rounded-xl">
    <div class="absolute w-full h-full bg-black opacity-60 rounded-2xl"></div>
    <div className="p-6 flex flex-col justify-center items-center">
      <h2 className="m-auto text-white z-10">Conociendo la discapacidad</h2>
      <p className="mt-6 text-white z-10">
        Conocer los conceptos básicos sobre la discapacidad y sus tipos.
      </p>
      <button className="mt-6 text-white z-10 bg-white text-blue-900 w-1/3 rounded-md">
        Tomar
      </button>
    </div>
  </div>
);

export default Card_curso;
