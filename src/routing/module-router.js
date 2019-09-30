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
import NewPersons from '../views/persons/persons-new';
import BranchOffices from '../views/branch-offices/branch-offices';
import NewBranchOffices from '../views/branch-offices/branch-offices-new';
import Roles from '../views/roles/roles';
import NewRoles from '../views/roles/roles-new';
import Tables from '../views/table';

const DashboardRoutes = () => (
    <Switch>
        <PrivateRoute exact path={routes.root.path} component={Dashboard} />
        <PrivateRoute path={routes.dashboard.path} component={Dashboard} />

        <PrivateRoute exact path={routes.persons.path} component={Persons} />
        <PrivateRoute path={routes.personsNew.path} component={NewPersons} />

        <PrivateRoute exact path={routes.branchOffices.path} component={BranchOffices} />
        <PrivateRoute path={routes.branchOfficesNew.path} component={NewBranchOffices} />

        <PrivateRoute exact path={routes.roles.path} component={Roles} />
        <PrivateRoute exact path={routes.rolesNew.path} component={NewRoles} />

        <PrivateRoute exact path={"/test"} component={Tables} />

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
