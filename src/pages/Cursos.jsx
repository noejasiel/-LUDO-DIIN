import React, { useEffect, useState } from "react";
import Nav2 from "../components/Nav_vista2";
import Card from "../components/Card.js";
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import Curso from "./Curso";
import services from '../services/curso';

const Cursos = () => {
  let {path, url} = useRouteMatch()
  const [cursos, setCursos] = useState([])

  useEffect(()=>{
    const getCursos =async ()=>{
      const res = await services.getCursos()
      setCursos(res);
    }
    getCursos();
  },[])
  console.log(path);
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-primary to-secondary">
      <Nav2 />
      <h1 className="text-center mt-6 mb-6 text-white font-bold text-3xl">Cursos de Inclusion</h1>
        <div className="flex alig flex-wrap justify-center">
        {cursos.map((c) => (
              <Card key={c.id} curso={c} url={url} />
        ))}
        </div>
          <Switch>
            <Route exact path={`${path}/:id`}>
              <Curso/>
            </Route>
          </Switch>
    </div>
  );
};

export default Cursos;
