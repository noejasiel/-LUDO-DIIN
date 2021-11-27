import React from 'react';
import Nav3 from './Nav_vista3';
import backIcon from '../assets/back.svg'

const Cursos = ()=>(

    <div className="bg-blue-900">
        <Nav3 />
        <main>
            <div className="mt-10 text-center content-center">
                <h1 className="text-indigo-50 text-3xl">Conociendo la discapacidad</h1>
            </div>
            <div className="mt-3 text-center content-center">
                <h3 className="text-indigo-50">Conocer los conceptos basicos de la discapacidad</h3>
            </div>
            <article className=".w-1/2 rounded-lg my-10 mx-10 p-5 text-center content-center bg-indigo-50">
                <div >
                    <h2 className="text-blue-900 text-2xl">Pregunta</h2>
                        <div className="text-indigo-50">
                            <h3 className="rounded-lg text-justify justify-center mx-5 bg-blue-900 p-2 my-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestias facilis, veritatis inventore, a maxime tempore exercitationem dolorum odit dignissimos, voluptas eum corrupti nemo quas fuga? Rem dolorum laborum nam.</h3>
                            <h3 className="rounded-lg text-justify justify-center mx-5 bg-blue-900 p-2 my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nisi, praesentium sint aspernatur ipsum id accusamus similique dolore quas error facere placeat voluptas debitis ducimus magnam. Magni facilis modi quam.</h3>
                            <h3 className="rounded-lg text-justify justify-center mx-5 bg-blue-900 p-2 my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, accusamus consequuntur esse quos consequatur labore nostrum. Repellat optio est asperiores, tempora consequatur corporis, ratione natus repellendus eum mollitia ab! Quis.</h3>
                        </div>
                </div>    
            </article>
        </main>
    </div>
);

export default Cursos;