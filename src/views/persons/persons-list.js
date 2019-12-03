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
                per_page: 25,
                page: 0,
                from: 0,
                to: 0,
                pages: 0,
                total: 0
            },
            data: [],
            tableEvents: {
                'pagination': this.handleTablePagination,
                'cellEdit': this.handleTableCellEdit,
                'sort': this.handleTableSort,
                'filter': this.handleTableFilter,
            }
        };

        this.handleTableChange = this.handleTableChange.bind(this);
    }

    componentDidMount() {
        this.fireDataUpdate();
    }

    handleTablePagination = (...params) => {
        console.log('function table pagination called', params);

        this.setState({
            pagination: {
                page: params.page,
                per_page: params.sizePerPage,
            }
        });

        this.fireDataUpdate();
    }

    handleTableCellEdit = (...params) => {
        console.log('function table cellEdit called', params);
    };

    handleTableSort = (...params) => {
        console.log('function table cellEdit called', params);
    };

    handleTableFilter = (...params) => {
        console.log('function table filter called', params);
    };

    fireDataUpdate() {
        console.log('Updating data...');

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

    render() {
        console.log(this.state.data);
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
                            count={this.state.pagination.total}
                            rowsPerPage={this.state.pagination.per_page}
                            page={this.state.pagination.page - 1}
                        />
                    </Paper>
                </Grid>
            </Grid >
        );
    }

    handleTableChange = (type, { page, sizePerPage, filters, sortField, sortOrder, cellEdit }) => {
        this.state.tableEvents[type]({ page, sizePerPage, filters, sortField, sortOrder, cellEdit });
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