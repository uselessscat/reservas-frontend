import React from 'react';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import DashboardRouter from './dasboard-router';

import Login from '../views/login';
import { Error404 } from '../views/errors';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/dashboard' />
                </Route>

                <Route path='/login' component={Login} />

                <DashboardRouter />

                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    )
};

export default Router;