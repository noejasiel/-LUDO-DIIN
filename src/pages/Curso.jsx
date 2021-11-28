import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Nav3 from '../components/Nav_vista3';
import Pregunta from '../components/Pregunta';
import services from '../services/curso';

const Curso = ()=>{

    let {id} = useParams()
    const [curso, setCurso] = useState({});
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const getCurso = async ()=>{
            const res = await services.getCurso(id)
            setCurso(res)
        }
        getCurso()
    },[id])
    console.log(curso);
    return(
        <div className="bg-gradient-to-r from-primary to-secondary h-screen">
        <Nav3 />
        <main>
            <div className=" text-center content-center">
                <h1 className="text-indigo-50 text-3xl font-bold">{curso.titulo}</h1>
            </div>
            <div className="mt-3 text-center content-center">
                <h3 className="text-indigo-50">{curso.descripcion}</h3>
            </div>
            {
                curso.preguntas.map((p)=>{
                    <article className=".w-1/2 rounded-lg my-10 mx-10 p-5 text-center content-center bg-indigo-50">
                    <Pregunta p={p}/>
                    </article>
                })
            }
        </main>
    </div>
    )
};

export default Curso;