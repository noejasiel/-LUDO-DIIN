import React from "react";
import user from "../assets/user.png";
import Nav from "../components/Nav";
const Login = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-primary to-secondary">
      <Nav />
      <div className="w-full flex justify-center pt-20 content-center items-center ">
        <div className="w-1/3 border-2 h-3/5 bg-indigo-50 py-12 rounded-xl">
          <div className="w-full flex justify-center  content-center items-center h-full flex-col">
            <img
              src={user}
              width="60"
              height="50"
              className="mb-4"
              alt="user-icon"
            />
            <h1 className="text-blue-900 mb-4 font-bold text-2xl">
              Iniciar Sesion
            </h1>
            <form className="mt-1 ">
              <div className=" flex justify-center content-center items-center  flex-col ">
                <input
                  className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                  placeholder="Correo o Usuario"
                ></input>
              </div>
              <div className=" flex justify-center content-center items-center flex-col mt-4 ">
                <input
                  className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                  placeholder="Contraseña"
                ></input>
              </div>
              <div className=" flex justify-center content-center items-center flex-col mt-2 ">
                <button className="mt-2 hover:bg-white hover:text-blue-900 border-2 hover:border-blue-900 bg-blue-900 p-2 rounded-md text-indigo-50 pr-4 pl-4">
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
