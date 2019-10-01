import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../routing/routes';
import PaginableTable from '../../components/table/paginable-table';

import ReservationsApi from '../../clases/api/reservations/reservations';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Persons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: [],
            pagination: {
                size: 10,
                page: 1,
                pages: 10,
            }
        }


        this.onPagePrev = this.onPagePrev.bind(this);
        this.onPageNext = this.onPageNext.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onChangePaginationSize = this.onChangePaginationSize.bind(this);
    }

    componentDidMount() {
        ReservationsApi.Persons.list(response => {
            this.setState({
                persons: response.data
            })
        });
    }


    render() {
        const personsBody = this.getPersonsTableBody();
        const pagSize = {
            pageSize: this.state.pagination.size,
            pageSizes: [5, 10, 20, 100],
            onChange: this.onChangePaginationSize
        }

        const pagInfo = {
            from: 10,
            to: this.state.persons.length + this.state.pagination.page * this.state.pagination.size,
            total: 100,
        }

        const pagination = {
            page: this.state.pagination.page,
            pages: 10,
            onChange: this.onChangePage,
            onPrev: this.onPagePrev,
            onNext: this.onPageNext,
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
                        <PaginableTable striped bordered hover
                            paginationSize={pagSize}
                            paginationInfo={pagInfo}
                            paginator={pagination}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {personsBody}
                            </tbody>
                        </PaginableTable>
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

    onChangePaginationSize(event) {
        const paginationSize = event.target.value;

        this.setState({ pagination: { size: paginationSize } });
    }

    onChangePage(index) {
        this.setState({
            pagination: {
                page: index,
            }
        });
    }

    onPagePrev(event) {
        this.setState(prevState => {
            return {
                pagination: { page: prevState.pagination.page - 1 }
            }
        });
    }

    onPageNext(event) {
        this.setState(prevState => {
            return {
                pagination: { page: prevState.pagination.page + 1 }
            }
        });
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