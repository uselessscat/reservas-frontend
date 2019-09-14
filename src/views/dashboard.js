import React from 'react';

import DashboardLayout from '../layouts/dashboard-layout';

import { SidebarBrand, SidebarItem, SidebarSeparator } from '../components/dashboard/sidebar';
import { TopbarSearch } from '../components/dashboard/topbar';



function SidebarContent() {
    return (
        <React.Fragment>
            <SidebarBrand title="Reservations">
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </SidebarBrand>
            <SidebarItem title="Dashboard" />
            <SidebarSeparator />
        </React.Fragment>
    )
}

function TopbarContent() {
    return (<TopbarSearch />)
}

function FooterContent() {
    return (
        <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2019</span>
        </div>
    )
}

class Dashboard extends React.Component {
    render() {
        return (
            <DashboardLayout
                sidebar={SidebarContent()}
                topbar={TopbarContent()}
                footer={FooterContent()}>
                <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
            </DashboardLayout>
        )
    }
}

export default Dashboard;