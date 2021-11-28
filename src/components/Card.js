import React from "react";
import {Link} from 'react-router-dom';

const Card_curso = ({ curso, url }) => {
  return (
    <div className={`w-2/6 m-10 ${curso.img} bg-cover h-96 relative rounded-xl mb-10`}>
      <div className="absolute w-full h-full bg-black opacity-60 rounded-xl"></div>
      <div className="h-full p-6 flex flex-col justify-around items-center text-center">
        <h2 className=" text-white text-3xl z-10 font-bold">{curso.titulo}</h2>
        <p className="mt-4 text-white z-10">{curso.descripcion}</p>
        <Link to={`${url}/${curso.id}`} className="hover:bg-blue-900 hover:text-white text-white z-10 bg-white text-blue-900 w-1/3 rounded-md mt-4">
          Tomar
        </Link>
      </div>
    </div>
  );
};

export default Card_curso;
