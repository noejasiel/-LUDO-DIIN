import React from "react";

const Card_curso = ({ curso }) => {
  console.log(curso);
  return (
    <div
      className={`w-2/3 m-auto ${curso.img} bg-cover h-full relative rounded-xl`}
    >
      <div class="absolute w-full h-full bg-black opacity-60 rounded-2xl"></div>
      <div className="h-full p-6 flex flex-col justify-around items-center  ">
        <h2 className=" text-white z-10">{curso.titulo}</h2>
        <p className="mt-4 text-white z-10">{curso.descripcion}</p>
        <button className=" text-white z-10 bg-white text-blue-900 w-1/3 rounded-md mt-4">
          Tomar
        </button>
      </div>
    </div>
  );
};

export default Card_curso;
