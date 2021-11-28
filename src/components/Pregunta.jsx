import React from 'react';

const Pregunta = ({p})=>(
    <div >
        <h2 className="text-blue-900 text-2xl font-bold">{p.titulo}</h2>
            <div className="text-indigo-50">
                <h3 className="hover:bg-blue-800 cursor-pointer rounded-lg text-justify justify-center mx-5 bg-blue-900 p-2 my-2 ">{p.opc1 === null ? null: p.opc1}</h3>
                <h3 className="hover:bg-blue-800 cursor-pointer rounded-lg text-justify justify-center mx-5 bg-blue-900 p-2 my-2">{p.opc2 === null ? null: p.opc2}</h3>
                <h3 className="hover:bg-blue-800 cursor-pointer rounded-lg text-justify justify-center mx-5 bg-blue-900 p-2 my-2">{p.opc3 === null ? null: p.opc3}</h3>
            </div>
    </div>   
);

export default Pregunta;