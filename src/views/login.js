import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Paper,
    Box,
    Grid,
    Typography,
    Icon
} from '@material-ui/core';

import Copyright from '../components/dashboard/copyright';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login() {
    const classes = useStyles();

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Icon>lock</Icon>
                    </Avatar>
                    <Typography component='h1' variant='h5'>Bienvenido</Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Correo electrónico'
                            name='email'
                            autoComplete='email'
                            autoFocus />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Contraseña'
                            type='password'
                            id='password'
                            autoComplete='current-password' />
                        <FormControlLabel
                            control={<Checkbox value='remember' color='primary' />}
                            label='Recuerdame' />
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}>Ingresar</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href='#' variant='body2'>Olvidé mi contraseña</Link>
                            </Grid>
                            <Grid item>
                                <Link href='#' variant='body2'>{'Registrarse'}</Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );

}

export default Login;