import React from 'react';
import { connect } from 'react-redux';

import ReservationsApi from '../../clases/api/reservations/reservations';
import {
    Grid,
    Paper,
    IconButton,
    Icon,
    TableBody,
    Table,
    TableCell,
    TableRow,
    TablePagination,
    TableHead,
    Typography,
    TableSortLabel
} from '@material-ui/core';

class PersonsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pagination: {
                per_page: 25
            },
            data: []
        };
    }

    componentDidMount() {
        this.fireDataUpdate();
    }

    fireDataUpdate() {
        ReservationsApi.Persons.list(this.state.pagination, response => {
            const data = response.data;

            this.setState({
                data: data.data,
                pagination: {
                    page: data.current_page,
                    from: data.from,
                    to: data.to,
                    pages: data.last_page,
                    total: data.total,
                    per_page: parseInt(data.per_page)
                }
            })
        });
    }

    handleChangePage = (event, newPage) => {
        this.setState((state, props) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: newPage
                }
            }
        }, () => this.fireDataUpdate());
    }

    handleChangeRowsPerPage = event => {
        this.setState((state, props) => {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    per_page: parseInt(event.target.value, 10)
                }
            }
        }, () => this.fireDataUpdate());
    };

    render() {
        const results = (this.state.data.length > 0) ?
            this.state.data.map((element, index) => {
                return (
                    <TableRow key={index}>
                        <TableCell component='th' scope='row'>{element.id}</TableCell>
                        <TableCell>{element.name} {element.last_name}</TableCell>
                        <TableCell>{element.email}</TableCell>
                        <TableCell>
                            <IconButton>
                                <Icon>delete</Icon>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                )
            }) : (
                <TableRow>
                    <TableCell colSpan={4} align='center'>Sin datos</TableCell>
                </TableRow>
            );

        return (
            <Grid container spacing={3}>
                <Grid item lg={12}>
                    <Typography variant='h4'>Personas</Typography>
                </Grid>
                <Grid item lg={12}>
                    <Paper>
                        <div>
                            <Table aria-label='custom pagination table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <TableSortLabel>ID</TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel>Nombre</TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            <TableSortLabel>Email</TableSortLabel>
                                        </TableCell>
                                        <TableCell>
                                            Accciones
                                    </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {results}
                                </TableBody>
                            </Table>
                        </div>
                        <TablePagination
                            component='div'
                            rowsPerPageOptions={[5, 10, 25]}
                            colSpan={3}
                            count={this.state.pagination.total || 0}
                            rowsPerPage={this.state.pagination.per_page}
                            page={this.state.pagination.page || 0}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
            </Grid >
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList);