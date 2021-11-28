import React from 'react';
import {Switch, useRouteMatch} from 'react-router-dom';
import PrivateRouter from '../routes/RqeuiredAuth.routes'
import Cursos from './Cursos';
import Curso from './Curso';

const Ludodiin = ()=>{
    let {url} = useRouteMatch()
    return(
        <div className="dashboard-section">
            <Switch>
                <PrivateRouter exact path={`${url}/cursos`} component={Cursos}/>
                <PrivateRouter path={`${url}/cursos/:id`} component={Curso}/>
                {/* <PrivateRouter path={`${url}/perfil`} component={Descanso}/> */}
            </Switch>
        </div>
    )
};

export default Ludodiin;