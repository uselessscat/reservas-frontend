import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './views/dashboard';
import Login from './views/login';
import { Error404 } from './views/errors';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    )
};

export default Router;