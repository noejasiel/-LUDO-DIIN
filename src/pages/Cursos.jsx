import React from "react";
import Nav2 from "../components/Nav_vista2";
import Card from "../components/Card.js";
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import Curso from "./Curso";

const Cursos = () => {
  let {path, url} = useRouteMatch()
  const curso = [
    {
      id: 0,
      titulo: "1. Conociendo la discapacidad",
      descripcion:
        "Conocer los conceptos básicos sobre la discapacidad y sus tipos.",
      img: "bg-img-card1",
    },
    {
      id: 1,
      titulo: "2. Acercamiento a nociones de Inclusión Laboral en Mexico",
      descripcion:
        "Explicar las nociones teóricas de la inclusión laboral en Mexico para un acercamiento al buen trato de personas con discapacidad.",
      img: "bg-img-card2",
    },
    {
      id: 2,
      titulo: "3. Reclutamiento y selección inclusiva",
      descripcion:
        "Comprender el proceso de reclutamiento y selección inclusivo adecuado en la empresa.",
      img: "bg-img-card3",
    },
    {
      id: 3,
      titulo: "4. Sensibilización y concientización",
      descripcion:
        "Proporcionar información a través de cursos y dinámicas para crear y mantener la sensibilización y concientización en la empresa.",
      img: "bg-img-card4",
    },
    {
      id: 4,
      titulo: "5. Normativa sobre la Inclusión Laboral en Mexico",
      descripcion:
        "Identificar las normas, leyes y postulados que conforman el marco jurídico, social y empresarial para comprender una inclusión  laboral.",
      img: "bg-img-card5",
    },
    {
      id: 5,
      titulo: "6. Tips para la complementación de la Inclusión en la empresa",
      descripcion:
        "Compartir a los empleados sobre las recomendaciones de la complementación adecuada en la empresa para lograr una inclusión laboral.",
      img: "bg-img-card6",
    },
  ];
  console.log(url);
  console.log(path);
  return (
    <div className="bg-blue-900 w-full h-full bg-gradient-to-r from-primary to-secondary">
      <Nav2 />
      <h1 className="text-center mt-6 mb-6 text-white font-bold text-3xl">Cursos de Inclusion</h1>
        <div className="flex alig flex-wrap justify-center">
        {curso.map((c) => (
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
