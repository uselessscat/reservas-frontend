import React from 'react'
import routes from './routes';

import { Switch } from 'react-router-dom';
import PrivateRoute from '../components/auth/private-route';

import DashboardLayout from '../layouts/dashboard-layout';

import { Error404 } from '../views/errors';

import Dashboard from '../views/dashboard/dashboard';

import PersonsList from '../views/persons/persons-list';
import NewPersons from '../views/persons/persons-new';

const DashboardContentSelector = () => (
    <Switch>
        <PrivateRoute exact path={routes.root.path} component={Dashboard} />
        <PrivateRoute path={routes.dashboard.path} component={Dashboard} />

        <PrivateRoute exact path={routes.persons.path} component={PersonsList} />
        <PrivateRoute path={routes.personsNew.path} component={NewPersons} />

        <PrivateRoute component={Error404} />
    </Switch>
);

const ModuleRoutes = () => (
    <DashboardLayout>
        <DashboardContentSelector />
    </DashboardLayout>
)

export default ModuleRoutes;

/**
 *

        <PrivateRoute exact path={routes.branchOffices.path} component={BranchOffices} />
        <PrivateRoute path={routes.branchOfficesNew.path} component={NewBranchOffices} />

        <PrivateRoute exact path={routes.roles.path} component={Roles} />
        <PrivateRoute exact path={routes.rolesNew.path} component={NewRoles} />
 */