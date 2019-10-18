import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
    AppBar, Toolbar, IconButton, Icon, Typography, Button, Drawer,
    Container, List, Divider, Grid, Badge, ListItem, ListItemIcon, ListSubheader, CssBaseline, ListItemText, Paper
} from '@material-ui/core';

import Copyright from '../components/dashboard/copyright';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
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
            <div>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>Dashboard</Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <Icon>notifications</Icon>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Drawer variant='permanent'
                    classes={{
                        paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}>
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <Icon>chevron_left</Icon>
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <div>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>dashboard</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>shoppingcart</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Orders" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>people</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Customers" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>bar_chart</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Reports" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>layers</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Integrations" />
                            </ListItem>
                        </div>
                    </List>
                    <Divider />
                    <List>
                        <div>
                            <ListSubheader inset>Saved reports</ListSubheader>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>assignment</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Current month" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>assignment</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Last quarter" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Icon>assignment</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Year-end sale" />
                            </ListItem>
                        </div>
                    </List>
                </Drawer>
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