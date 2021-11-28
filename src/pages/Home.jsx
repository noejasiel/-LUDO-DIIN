import React from "react";
import Nav from "../components/Nav";
import imgLgbt from "../assets/lgbti_Home.png";
import HeroHome from "../components/HeroHome";
import Somos from "../components/Somos";
import Participantes from "../components/Participantes";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-bgHome bg-cover relative pb-13">
        <Nav />
        <div className="w-full flex justify-center items-center ">
          <div className=" w-1/2 bg-indigo-900 bg-opacity-75 rounded-2xl pb-9 relative">
            <h1 className="text-center mt-4 text-white text-4xl mb-12">
              LUDO DINN
            </h1>
            <p className="text-white text-center w-4/5 m-auto">
              plataforma web donde existe una variedad de herramientas para
              desarrollar y reforzar habilidades para la vida y laborales de los
              empleadores y para las áreas de recursos humanos y sociedad civil,
              <li>
                <strong>
                  Cursos y talleres con contenidos formativos para crear
                  conciencia sobre la inclusión laboral
                </strong>
              </li>
              <li>
                <strong>
                  Oportunidades para personas con discapacidad para encontrar
                  trabajo
                </strong>
              </li>
              <li>
                <strong>
                  Una comunidad para compartir experiencias búsqueda de trabajo,
                  los procesos de reclutamiento, selección e implementación de
                  la inclusión laboral
                </strong>
              </li>
            </p>
            <button className="w-2/6 m-auto left-0 right-0   -bottom-3.5  absolute bg-gray-800   text-green-600 p-2 rounded-xl mt rounded-lg">
              Registrate
            </button>
          </div>
        </div>
      </div>
      <HeroHome />
      <Somos />
      <Participantes />
    </div>
  );
};

export default Home;
