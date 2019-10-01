import React from 'react';
import { Provider } from 'react-redux';
import store from "../redux/store/index";
import routes from './routes';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ModuleRoutes from './module-router';

import Login from '../views/login';

export default function Router() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    {/* routas publicas */}
                    <Route exact path={routes.login.path} component={Login} />

                    {/* Rutas privadas */}
                    <ModuleRoutes />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

