import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../views/dashboard/dashboard';
import { Error404 } from '../views/errors';

// Persons
import Personas from '../views/persons/persons';
import PersonsNew from '../views/persons/persons-new';

const ModuleRoutes = () => (
    <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route path='/dashboard' component={Dashboard} />
         <Route exact path='/personas' component={Personas} />
         <Route path='/personas/nuevo' component={PersonsNew} />
         <Route component={Error404} />
    </Switch>
);

export default ModuleRoutes;


// Exportar las rutas nos permite que los componentes hagan referencia a
// partes de la aplicación sin tener conocimiento exacto de qué urls existen.
// De esta forma si hubiese que cambiar alguna url, no tendríamos que buscar
// todos los `<Link to` del código.
// En aplicaciones más grandes puede resultar útil.
// Toda la información relacionada con las rutas de la aplicación queda
// centralizada únicamente en este módulo.
export const routes = {
    dashboard: () => '/dashboard',
    persons: () => '/personas',
    personsNew: () => 'personas/nuevo'
};
