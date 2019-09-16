import React from 'react';
import { SidebarList } from '../components/dashboard/sidebar';
import Topbar from '../components/dashboard/topbar';
import Footer from '../components/dashboard/footer';

export default class DashboardLayout extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <SidebarList>
                    {<this.props.sidebarContent />}
                </SidebarList>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar>
                            {<this.props.topbarContent />}
                        </Topbar>
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer>
                        {<this.props.footerContent />}
                    </Footer>
                </div>
            </div>
        )
    }
}