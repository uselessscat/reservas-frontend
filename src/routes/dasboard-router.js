import React from 'react';

import { Route } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard-layout';

import Sidebar from '../views/dashboard/sidebar';
import Topbar from '../views/dashboard/topbar';
import Footer from '../views/dashboard/footer';

import Dashboard from '../views/dashboard/dashboard';
import Personas from '../views/persons';

export default function DashboardRouter() {
    return (
        <DashboardLayout
            sidebar={<Sidebar />}
            topbar={<Topbar />}
            footer={<Footer />}>

            <Route path='/dashboard' component={Dashboard} />
            <Route path='/personas' component={Personas} />
        </DashboardLayout>
    )
}