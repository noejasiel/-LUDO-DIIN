import React from 'react';
import auth from './auth';
import {Redirect, Route} from 'react-router-dom';

const RequiredAuth = ({component: Component, ...rest})=>{
    return(
        <Route 
            {...rest }
            render={props =>(auth.isAuthenticated()
                ? <Component {...props}/>
                : <Redirect to="/iniciar-sesion"/>
            )}
        />
    );
};

export default RequiredAuth