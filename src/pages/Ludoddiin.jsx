import React from 'react';
import {Switch, useRouteMatch} from 'react-router-dom';
import PrivateRouter from '../routes/RqeuiredAuth.routes'
import Cursos from './Cursos';
import Curso from './Curso';

const Ludodiin = ()=>{
    let {path} = useRouteMatch()
    console.log(path);
    return(
        <div className="dashboard-section">
            <Switch>
                <PrivateRouter exact path={`${path}/cursos`} component={Cursos}/>
                <PrivateRouter path={`${path}/cursos/:id`} component={Curso}/>
            </Switch>
        </div>
    )
};

export default Ludodiin;