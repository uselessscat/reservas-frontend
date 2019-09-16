import React from 'react';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import DashboardRouter from './dasboard-router';

import Login from '../views/login';
import { Error404 } from '../views/errors';

function Router() {
    return (
        <BrowserRouter>
            <Switch>               
                {/* routas publicas */}
                 <Route path="/login" component={Login} />

                {/* Rutas privadas */}
                
                {/* Si se ingresa CUALQUIER ruta que no este en las rutas publicas, y no el usuario no esta logueado,
                deberia hacer un redirect automatico a "Login" con un componente "PrivateRoute" */}
                {/* En las rutas privadas seria recomendable crear un "High Order Function o HOC" que ejecute la logica mencionada arriba   */}  
                {/* Podria ser un HOC llamado PrivateRoute,  */}
                {/* por ejemplo: <PrivateRoute path="/" component={DashboardRouter} /> */}
                <Route path="/" component={DashboardRouter} />
                <Route path="/dashboard" component={DashboardRouter} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;

export const routes = {
    dashboard: () => '/dashboard',
    login: () => '/login'
};
