import React from "react";
import Jesus from "../assets/Jesus.PNG";
import Sol from "../assets/Sol.PNG";
import David from "../assets/David.PNG";
import Noe from "../assets/Noe.PNG";

const Participantes = () => {
  return (
    <div className="w-full flex justify-center items-center  flex-col p-6 bg-blue-600">
      <h1 className="text-center text-white font-extrabold">Participantes </h1>
      <div className="flex">
        <div className="w-2/4  mt-10 pl-6  pr-6 pb-6 ">
          <h1 className="text-center text-white">Jesus-Backend </h1>
          <img src={Jesus} width="200" />
        </div>
        <div className="w-2/4  mt-10 pl-6  pr-6 pb-6">
          <h1 className="text-center text-white">Pedagoda - contenido </h1>
          <img src={Sol} width="200" />
        </div>
        <div className="w-2/4  mt-10 pl-6  pr-6 pb-6">
          <h1 className="text-center text-white">Frontend </h1>
          <img src={David} width="200" />
        </div>
        <div className="w-2/4  mt-10 pl-6  pr-6 pb-6">
          <h1 className="text-center text-white">Frontend </h1>
          <img src={Noe} width="200" />
        </div>
      </div>
    </div>
  );
};

export default Participantes;
