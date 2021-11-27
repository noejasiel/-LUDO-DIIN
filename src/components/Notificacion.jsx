import React from 'react';

const Notificacion = ({message})=>{

    if (message === null) return null;
    return(
        <div className="text-red-600 m-3">
            {message}
        </div>
    )
};

export default Notificacion;