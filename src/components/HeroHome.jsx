import React from "react";
import imgLgbt from "../assets/lgbti_Home.png";

const HeroHome = () => {
  return (
    <div className="w-full flex justify-center items-center  p-6 bg-red-700">
      <div className="w-2/4  mt-10 ">
        <h1 className="text-center text-white">¿Que Significamos?</h1>
        <p className="w-3/4 text-center m-auto text-white ">
          LUDODIIN Ludo significa aprendizaje lúdico DIIN representa la
          Inclusión e integración de personas con discapacidad y la frase que
          adoptamos para nuestro proyecto es{" "}
          <strong className="w-3/4 text-center m-auto text-white">
            "La discapacidad no te define, te define cómo haces frente a los
            desafíos que la discapacidad te presenta”
          </strong>
          – Jim Abbott."
        </p>
      </div>
      <img src={imgLgbt} />
    </div>
  );
};

export default HeroHome;
