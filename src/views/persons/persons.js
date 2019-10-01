import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../routing/routes';
import Table from '../../components/table/searchable-paginable-table';

import ReservationsApi from '../../clases/api/reservations/reservations';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const columns = ['#', 'Nombre', 'Email'];

class Persons extends React.Component {
    state = {
        persons: [],
        pagination: {
            size: 10,
            page: 1,
            pages: 5,
        },
        search: {
            value: '',
        }
    };

    componentDidMount() {
        this.fireDataUpdate();
    }

    fireDataUpdate() {
        console.log('Updating data...');

        ReservationsApi.Persons.list(response => {
            this.setState({
                persons: response.data
            })
        });
    }

    render() {
        const personsBody = this.getPersonsTableBody();

        const filter = this.state.search.value;
        const paginationInfo = {
            // TODO: cargar estos datos desde api
            itemFrom: (this.state.pagination.page - 1) * this.state.pagination.size,
            itemTo: this.state.persons.length + (this.state.pagination.page - 1) * this.state.pagination.size,
            items: 100,
            page: this.state.pagination.page,
            pages: this.state.pagination.pages,
            pageSize: this.state.pagination.size,
            pageSizes: [5, 10, 20, 100],
        }

        const events = {
            onChangePageSize: this.onChangePageSize,
            onChangePage: this.onChangePage,
            onChangeSearch: this.onSearchChange
        }

        return (
            <>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>Personas</h1>
                    <Link to={routes.personsNew.path} className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
                        <FontAwesomeIcon icon={'plus'} /> Ingresar persona
                    </Link>
                </div>
                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Registros</h6>
                    </div>
                    <div className='card-body'>
                        <Table paginationInfo={paginationInfo} filter={filter} events={events}>
                            <thead>
                                <tr>
                                    {columns.map((column, key) => <th key={key}>{column}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {personsBody}
                            </tbody>
                        </Table>
                    </div>
                </div >
            </>
        );
    }

    getPersonsTableBody() {
        return (this.state.persons.length > 0) ? this.state.persons.map((element, index) => {
            return (
                <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.name + ' ' + element.last_name}</td>
                    <td>{element.email}</td>
                </tr>
            )
        }) : <tr><td colSpan='3'>Loading…</td></tr>
    }

    onChangePageSize = (event) => {
        const paginationSize = event.target.value;

        this.setState(prevState => {
            return {
                pagination: {
                    ...prevState.pagination,
                    size: paginationSize
                }
            }
        });

        this.fireDataUpdate();
    }

    onChangePage = (index) => {
        this.setState(prevState => {
            return {
                pagination: {
                    ...prevState.pagination,
                    page: index,
                }
            }
        });

        this.fireDataUpdate();
    }

    onSearchChange = (event) => {
        const value = event.target.value;

        this.setState(prevState => {
            return {
                search: {
                    value: value
                }
            }
        });

        this.fireDataUpdate();
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

export default connect(mapStateToProps, mapDispatchToProps)(Persons);