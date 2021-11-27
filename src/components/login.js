import React, {useState} from "react";
import userIcon from "../assets/user.png";
import Nav from "../components/Nav";
import services from '../services/user';
import axios from 'axios';
import Notificacion from './Notificacion'

const Login = () => {

  const [user, setUser] = useState({email:'', password: ''})
  const [error, setError] = useState(false)

  const handleChange = e => {
    setUser({...user, [e.target.name] :e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await services.login(user)
      window.localStorage.setItem('user', JSON.stringify(res))
      setUser({...user, email:'', password:''})
      window.location.href = '/cursos'
    } catch (error) {
        setError(`Contrasena o email incorrecto`)
        setTimeout(()=> {
          setError(null)
        },5000)
    }
  }

  return (
    <div className="h-screen bg-gradient-to-r from-primary to-secondary">
      <Nav/>
      <div className="w-full flex justify-center pt-20 content-center items-center ">
        <div className="w-1/3 border-2 h-3/5 bg-indigo-50 py-12 rounded-xl">
          <div className="w-full flex justify-center  content-center items-center h-full flex-col">
            <img src={userIcon} width="60" height="50" className="mb-4" alt="user-icon"/>
            <h1 className="text-blue-900 mb-4 font-bold text-2xl">Iniciar Sesion</h1>
            <form className="mt-1" onSubmit={handleSubmit}>
              <div className=" flex justify-center content-center items-center  flex-col ">
                <input
                  required
                  value={user.email}
                  onChange={handleChange}
                  name="email"
                  className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                  placeholder="Correo o Usuario"
                ></input>
              </div>
              <div className=" flex justify-center content-center items-center flex-col mt-4 ">
                <input
                  required
                  value={user.password}
                  onChange={handleChange}
                  name="password"
                  className="border-b-2 border-indigo-800 placeholder-blue-900 bg-indigo-50"
                  placeholder="Contraseña"
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
};

export default Login;
