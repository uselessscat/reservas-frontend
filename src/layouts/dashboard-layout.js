import React from 'react';
import { Sidebar } from '../components/dashboard/sidebar';
import Topbar from '../components/dashboard/topbar';
import Footer from '../components/dashboard/footer';

export default class DashboardLayout extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Sidebar>
                    {this.props.sidebar}
                </Sidebar>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar>
                            {this.props.topbar}
                        </Topbar>
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer>
                        {this.props.footer}
                    </Footer>
                </div>
            </div>
        )
    }
}