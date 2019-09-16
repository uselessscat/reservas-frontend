import React from 'react'
import routes from './routes';

import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../components/auth/private-route';

import DashboardLayout from '../layouts/dashboard-layout';

import { Error404 } from '../views/errors';

import Dashboard from '../views/dashboard/dashboard';
import Sidebar from '../views/dashboard/sidebar';
import Topbar from '../views/dashboard/topbar';
import Footer from '../views/dashboard/footer';
import Personas from '../views/persons/persons';
import PersonsNew from '../views/persons/persons-new';

const DashboardRoutes = () => (
    <Switch>
        <PrivateRoute exact path={routes.root.path} component={Dashboard} />
        <PrivateRoute path={routes.dashboard.path} component={Dashboard} />
        <PrivateRoute exact path={routes.persons.path} component={Personas} />
        <PrivateRoute path={routes.personsNew.path} component={PersonsNew} />

        <Route component={Error404} />
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