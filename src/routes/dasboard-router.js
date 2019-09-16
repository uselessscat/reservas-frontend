import React from 'react';

import DashboardLayout from '../layouts/dashboard-layout';
import Sidebar from '../views/dashboard/sidebar';
import Topbar from '../views/dashboard/topbar';
import Footer from '../views/dashboard/footer';

import ModuleRoutes from '../routes/module-routes';

export default function DashboardRouter() {
    return (
        <DashboardLayout
            sidebar={<Sidebar />}
            topbar={<Topbar />}
            footer={<Footer />}>
            
            {/* Nested routes de modulos internos*/}
            <ModuleRoutes />

        </DashboardLayout>
    );
}
