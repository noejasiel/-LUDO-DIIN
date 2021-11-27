import React from "react";
import user from "../assets/user.png";
import Nav from "./Nav";
const Registro = () =>{
    return (
        <div className="h-screen bg-gradient-to-r from-primary to-secondary">
        <Nav />
        <div className="w-full flex justify-center content-center items-center pt-20">
          <div className="w-1/3 border-2 h-3/5 bg-indigo-50 rounded-xl p-5">
            <div className="w-full flex justify-center  content-center items-center h-full flex-col">
              <img src={user} width="60" height="50" className="mb-4" alt="img-user" />
              <h1 className="text-blue-900 mb-4 font-bold text-2xl">Registrarse</h1>
              <form className="mt-1 ">
                <div className=" flex justify-center content-center items-center  flex-col ">
                  <input
                    className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                    placeholder="Nombre"
                  ></input>
                </div>
                <div className=" flex justify-center content-center items-center flex-col mt-4 ">
                  <input
                    className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                    placeholder="Apellido"
                  ></input>
                  
                </div>
                <div className="flex justify-between">
                    <p className=" flex justify-center content-center items-center flex-col mt-4 text-blue-900" >Genero:
                        <div>
                            <select
                                name="menu"
                                className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                            >
                                <option value="0">...</option>
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                                <option value="3">Otro</option>
                            </select>
                        </div>
                    </p>
                    <p className=" flex justify-center content-center items-center flex-col mt-4 text-blue-900">Edad:
                        <div>
                            <input type="number" min="18" max="99" className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"/>
                        </div>
                    </p>
                </div>    
                <div className=" flex justify-center content-center items-center flex-col mt-4 ">
                  <input
                    type="password"
                    className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                    placeholder="contraseña"
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
}
export default Registro;
