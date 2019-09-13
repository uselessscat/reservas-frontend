import React from 'react';
import { Sidebar, SidebarBrand, SidebarItem, SidebarSeparator } from '../components/dashboard/sidebar';
import { Topbar, TopbarSearch } from '../components/dashboard/topbar';
import Footer from '../components/dashboard/footer';

class Dashboard extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Sidebar>
                    <SidebarBrand title="Reservations">
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                    </SidebarBrand>
                    <SidebarItem title="Dashboard" />
                    <SidebarSeparator />
                </Sidebar>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar>
                            <TopbarSearch />
                        </Topbar>
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Dashboard;