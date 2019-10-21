import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper } from '@material-ui/core';

import Copyright from '../components/dashboard/copyright';
import Topbar from '../components/dashboard/topbar';
import Sidebar from '../components/dashboard/sidebar';

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
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
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
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

        return (
            <div className={classes.root}>
                <Topbar open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} />
                <Sidebar open={this.state.open} handleDrawerClose={this.handleDrawerClose} />

                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper className={fixedHeightPaper}>
                                    {this.props.children}
                                </Paper>
                            </Grid>
                        </Grid>
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