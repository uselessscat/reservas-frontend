import React from 'react'
import routes from './routes';

import { Switch } from 'react-router-dom';
import PrivateRoute from '../components/auth/private-route';

import DashboardLayout from '../layouts/dashboard-layout';

import { Error404 } from '../views/errors';

import Dashboard from '../views/dashboard/dashboard';
import Sidebar from '../views/dashboard/sidebar';
import Topbar from '../views/dashboard/topbar';
import Footer from '../views/dashboard/footer';
import Persons from '../views/persons/persons';
import NewPerson from '../views/persons/persons-new';
import BranchOffices from '../views/branch-offices/branch-offices';

const DashboardRoutes = () => (
    <Switch>
        <PrivateRoute exact path={routes.root.path} component={Dashboard} />
        <PrivateRoute path={routes.dashboard.path} component={Dashboard} />

        <PrivateRoute exact path={routes.persons.path} component={Persons} />
        <PrivateRoute path={routes.personsNew.path} component={NewPerson} />

        <PrivateRoute exact path={routes.branchOffice.path} component={BranchOffices} />
        <PrivateRoute path={routes.personsNew.path} component={NewPerson} />

        <PrivateRoute component={Error404} />
    </Switch >
);

const ModuleRoutes = () => (
    <DashboardLayout
        sidebarContent={Sidebar}
        topbarContent={Topbar}
        footerContent={Footer}>
        <DashboardRoutes />
    </DashboardLayout>
)

export default ModuleRoutes;