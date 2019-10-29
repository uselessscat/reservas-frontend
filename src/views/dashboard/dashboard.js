import React from 'react';
import clsx from 'clsx';

import { Grid, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    }
}));

export default function Dashboard(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <div>Dashboard</div>
                </Paper>
            </Grid>
        </Grid >
    )
}
