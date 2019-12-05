import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Grid,
    Typography,
    Button,
    Paper,
    Box
} from '@material-ui/core';

import routes from '../../routing/routes';

import ReservationsApi from '../../clases/api/reservations/reservations';

class NewPersons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            person: {
                name: '',
                last_name: '',
                email: ''
            }
        };
    }

    componentDidMount = () => {
        if (this.state.id !== undefined) {
            ReservationsApi.Persons.get(this.state.id, response => {
                this.setState({
                    person: response.data
                })
            });
        }
    }

    handleSubmit = (event) => {
        if (this.state.id === undefined) {
            ReservationsApi.Persons.store(this.state.person, response => {
                this.setState({
                    id: response.data.id,
                    person: response.data
                })
            });
        } else {
            ReservationsApi.Persons.update(this.state.id, this.state.person, response => {
                this.setState({
                    id: response.data.id,
                    person: response.data
                })
            });
        }

        event.preventDefault();
    }

    handleChange = (event) => {
        const target = event.target.name;
        const value = event.target.value;

        this.setState(prevState => {
            return {
                person: {
                    ...prevState.person,
                    [target]: value
                }
            };
        });
    }

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item container spacing={2} lg={12}>
                    <Grid item>
                        <Typography variant='h4'>Ingresar persona</Typography>
                    </Grid>
                </Grid>
                <Grid item lg={12}>
                    <Paper>
                        <Box padding={2}>
                            <Grid item>
                                <Typography component="h6" variant="h6">Datos de la persona</Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={this.handleSubmit} >
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <label htmlFor='name'>Nombre</label>
                                            <input type='name' className='form-control' id='name' name='name'
                                                value={this.state.person.name} onChange={this.handleChange} />
                                        </Grid>
                                        <Grid item>
                                            <label htmlFor='last_name'>Apellido</label>
                                            <input type='last_name' className='form-control' id='last_name' name='last_name'
                                                value={this.state.person.last_name} onChange={this.handleChange} />
                                        </Grid>
                                        <Grid item>
                                            <label htmlFor='email'>Email</label>
                                            <input type='email' className='form-control' id='email' name='email'
                                                value={this.state.person.email} onChange={this.handleChange} />
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item>
                                            <Button variant="contained" color="primary" component={Link} to={routes.persons.path}>Volver</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="primary" type="submit">Guardar</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}


const mapStateToProps = state => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPersons);
