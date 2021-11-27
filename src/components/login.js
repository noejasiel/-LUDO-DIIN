import React from "react";
import user from "../assets/user.png";
import Nav from "../components/Nav";
const Login = () => {
  return (
    <div className="bg-blue-900">
      <Nav />
      <div className="w-full flex justify-center h-screen content-center items-center ">
        <div className="w-1/3 border-2 h-3/5 bg-indigo-50 rounded-xl">
          <div className="w-full flex justify-center  content-center items-center h-full flex-col">
            <img src={user} width="60" height="50" className="mb-4" />
            <h1 className="text-blue-900 mb-4 bol">Iniciar Sesion</h1>
            <form className="mt-1 ">
              <div className=" flex justify-center content-center items-center  flex-col ">
                <label className="text-blue-900">Nombre o correo</label>
                <input className="border-b-2 border-indigo-800 "></input>
              </div>
              <div className=" flex justify-center content-center items-center flex-col mt-2 ">
                <label className="text-blue-900">Contraseña</label>
                <input className="border-b-2 border-indigo-800 "></input>
              </div>
              <div className=" flex justify-center content-center items-center flex-col mt-2 ">
                <button className="mt-2 bg-blue-900 p-2 rounded-md text-indigo-50 pr-4 pl-4">
                  Iniciar Sesion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
