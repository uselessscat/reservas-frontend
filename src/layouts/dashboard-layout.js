import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Copyright from '../components/dashboard/copyright';
import Topbar from '../components/dashboard/topbar';
import Sidebar from '../components/dashboard/sidebar';
import SidebarContent from '../views/dashboard/sidebar-content';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
});


class DashboardLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        };
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Topbar open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} />
                <Sidebar open={this.state.open} handleDrawerClose={this.handleDrawerClose}>
                    <SidebarContent />
                </Sidebar>

                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        {this.props.children}
                    </Container>
                    <Copyright />
                </main>
            </div>
        )
    }
}

DashboardLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardLayout)