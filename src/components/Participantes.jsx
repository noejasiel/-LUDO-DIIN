import React from "react";
import imgLgbt from "../assets/lgbti_Home.png";

const Participantes = () => {
  return (
    <div className="w-full flex justify-center items-center  p-6 bg-red-600">
      <div className="w-2/4  mt-10 ">
        <h1 className="text-center text-white">Participantes </h1>
        <img src={imgLgbt} />
      </div>
    </div>
  );
};

export default Participantes;
