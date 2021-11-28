import React, { useState } from "react";
import userIcon from "../assets/user.png";
import Nav from "../components/Nav";
import services from '../services/user';
import Notificacion from "../components/Notificacion";
import auth from '../routes/auth';
import {useHistory} from 'react-router-dom';

const Registro = () =>{
  let history = useHistory()
  const [user, setUser] = useState({nombre:'',apellido:'',genero:'',edad:'', password:'',email:''})
  const [error, setError] = useState(null)

  const handleChange = e =>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(user);
    try {
      const data = await services.signup(user)
      setUser({...user, email:'', password:'', apellido:'',genero:'',edad:'',nombre:''})
      auth.login(() => {
        window.localStorage.setItem('user', JSON.stringify(data))
        history.push('/ludodiin/cursos');
      })
    } catch (error) {
      setError(`Campos obligatorios`)
        setTimeout(()=> {
          setError(null)
        },5000)
    }
  }

    return (
        <div className="h-screen bg-gradient-to-r from-primary to-secondary">
        <Nav />
        <div className="w-full flex justify-center content-center items-center">
          <div className="w-1/3 border-2 h-3/5 bg-indigo-50 rounded-xl p-5">
            <div className="w-full flex justify-center  content-center items-center h-full flex-col">
              <img src={userIcon} width="60" height="50" className="mb-4" alt="img-user" />
              <h1 className="text-blue-900 mb-4 font-bold text-2xl">Registrarse</h1>
              <form onSubmit={handleSubmit} className="mt-1 ">
                <div className=" flex justify-center content-center items-center  flex-col ">
                  <input
                    onChange={handleChange}
                    name="nombre"
                    value={user.nombre}
                    className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                    placeholder="Nombre"
                  ></input>
                </div>
                <div className=" flex justify-center content-center items-center flex-col mt-4 ">
                  <input
                    onChange={handleChange}
                    name="apellido"
                    value={user.apellido}
                    className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                    placeholder="Apellido"
                  ></input>
                </div>
                <div className=" flex justify-center content-center items-center flex-col mt-4 ">
                  <input
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                    placeholder="Correo electronico"
                  ></input>
                </div>
                <div className="flex justify-between">
                    <p className=" flex justify-center content-center items-center flex-col mt-4 text-blue-900" >Genero:
                        <div>
                            <select
                              onChange={handleChange}
                              value={user.genero}
                              name="genero"
                              className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                            >
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                    </p>
                    <p className=" flex justify-center content-center items-center flex-col mt-4 text-blue-900">Edad:
                        <div>
                            <input
                              onChange={handleChange}
                              name="edad"
                              value={user.edad} type="number" min="18" max="99" className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"/>
                        </div>
                    </p>
                </div>    
                <div className=" flex justify-center content-center items-center flex-col mt-4 ">
                  <input
                    onChange={handleChange}
                    value={user.password}
                    type="password"
                    name="password"
                    className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                    placeholder="contraseña"
                  ></input>
                  
                </div>
                <Notificacion message={error}/>
                <div className=" flex justify-center content-center items-center flex-col mt-2 ">
                  <button type="submit" className="mt-2 hover:bg-white hover:text-blue-900 border-2 hover:border-blue-900 bg-blue-900 p-2 rounded-md text-indigo-50 pr-4 pl-4">
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
