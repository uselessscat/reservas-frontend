import React from 'react';
import { connect } from 'react-redux';

import { ButtonGroup, Button } from 'react-bootstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import routes from '../../routing/routes';
import ReservationsApi from '../../clases/api/reservations/reservations';

import BasicCrud from '../../components/crud/basic-crud';

const sortCaret = (order, column) => {
    return (
        <>
            <FontAwesomeIcon icon='arrow-up' className={order == 'desc' ? 'text-dark' : ''} />
            <FontAwesomeIcon icon='arrow-down' className={order == 'asc' ? 'text-dark' : ''} />
        </>
    )
};

const columns = [
    {
        dataField: 'id',
        text: '#',
        sort: true,
        sortCaret
    },
    {
        dataField: 'name',
        text: 'Nombre',
        sort: true,
        sortCaret
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
        sortCaret
    },
    {
        dataField: 'actions',
        text: 'Accciones',
        sort: true,
        sortCaret
    }
];

class PersonsList extends React.Component {
    state = {
        persons: [],
        pagination: {
            size: 10,
            page: 1,
            pages: 1,
            from: 0,
            to: 0,
            items: 0
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

        const params = {
            page: this.state.pagination.page,
            per_page: this.state.pagination.size
        }

        ReservationsApi.Persons.list(params, response => {
            console.log(response);
            const data = response.data;

            data.data.forEach(element => {
                element.actions = (
                    <>
                    <ButtonGroup>
                        <Button variant="outline-primary">
                            <FontAwesomeIcon icon='pencil-alt' />
                        </Button>
                        <Button variant="outline-danger">
                            <FontAwesomeIcon icon='trash' />
                        </Button>
                    </ButtonGroup>
                    </>
                )
            });

            this.setState({
                persons: data.data,
                pagination: {
                    page: data.current_page,
                    from: data.from,
                    to: data.to,
                    pages: data.last_page,
                    items: data.total
                }
            })
        });
    }

    render() {
        const paginationInfo = {
            itemFrom: this.state.pagination.from,
            itemTo: this.state.pagination.to,
            items: this.state.pagination.items,
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

        const search = {
            value: this.state.search.value,
            onChange: this.onSearchChange
        }

        return (
            <BasicCrud
                title='Personas'
                newTitle='Ingresar persona'
                newLink={routes.personsNew.path}
                table={{
                    keyField: 'id',
                    data: this.state.persons,
                    columns: columns,
                    pagination: paginationFactory(),
                    onTableChange: this.onTableChange
                }}
            />
        );
    }

    onTableChange = (type, { sortField, sortOrder, data }) => {
        console.log(type, sortField, sortOrder, data);
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
        }, () => {
            this.fireDataUpdate();
        });
    }

    onChangePage = (index) => {
        this.setState(prevState => {
            return {
                pagination: {
                    ...prevState.pagination,
                    page: index,
                }
            }
        }, () => {
            this.fireDataUpdate();
        });
    }

    onSearchChange = (event) => {
        const value = event.target.value;

        this.setState(prevState => {
            return {
                search: {
                    value: value
                }
            }
        }, () => {
            this.fireDataUpdate();
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

export default connect(mapStateToProps, mapDispatchToProps)(PersonsList);