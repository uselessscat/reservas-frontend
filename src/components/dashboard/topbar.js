import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Icon, Typography, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
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
}));

export default function Topbar(props) {
    const classes = useStyles();

    return (
        <AppBar position='absolute' className={clsx(classes.appBar, props.open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>Dashboard</Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <Icon>notifications</Icon>
                    </Badge>
                </IconButton>
                <IconButton color='inherit'>
                    <Icon>account_circle</Icon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}