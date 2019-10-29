import React from 'react';
import { connect } from 'react-redux';

import ReservationsApi from '../../clases/api/reservations/reservations';
import { Grid, Paper, IconButton, Icon, TableBody, Table, TableCell, TableRow, TablePagination, TableFooter, TableHead, Typography } from '@material-ui/core';

const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true,
        filter: {
            defaultValue: ''
        },
    },
    {
        dataField: 'name',
        text: 'Nombre',
        sort: true,
        filter: {
            defaultValue: ''
        },
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
        filter: {
            defaultValue: ''
        },
    },
    {
        dataField: 'actions',
        text: 'Accciones',
        sort: true
    }
];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const cellEditProps = {
    mode: 'click'
};

class PersonsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pagination: {
                per_page: 25
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
            console.log(response);
            const data = response.data;

            data.data.forEach(element => {
                element.actions = (
                    <IconButton>
                        <Icon>trash</Icon>
                    </IconButton>
                )
            });

            this.setState({
                data: data.data,
                pagination: {
                    page: data.current_page,
                    from: data.from,
                    to: data.to,
                    pages: data.last_page,
                    total: data.total
                }
            })
        });
    }

    render() {

        return (
            <Grid container spacing={3}>
                <Grid item lg={12}>
                    <Typography variant='h4'>Personas</Typography>
                </Grid>
                <Grid item lg={12}>
                    <Paper>
                        <Table aria-label='custom pagination table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Accciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component='th' scope='row'>A</TableCell>
                                    <TableCell>B</TableCell>
                                    <TableCell>C</TableCell>
                                    <TableCell>D</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25]}
                                        colSpan={3}
                                        count={1000}
                                        rowsPerPage={10}
                                        page={1}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </Paper>
                </Grid>
            </Grid >
        );

        /*  <BasicCrud
                title='Personas'
                newTitle='Ingresar persona'
                newLink={routes.personsNew.path}
                table={{
                    keyField: 'id',
                    data: this.state.data,
                    defaultSorted: defaultSorted,
                    columns: columns,
                    cellEdit: cellEditFactory(cellEditProps),
                    filter: filterFactory(),
                    pagination: paginationFactory({
                        page: this.state.pagination.page,
                        sizePerPage: this.state.pagination.per_page,
                        totalSize: this.state.pagination.total,
                    }),
                    onTableChange: this.handleTableChange
                }}
            /> */
    }

    handleTableChange = (type, { page, sizePerPage, filters, sortField, sortOrder, cellEdit }) => {
        console.log('table change type', type);
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