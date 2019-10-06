import React from 'react';
import { connect } from 'react-redux';

import routes from '../../routing/routes';
import ReservationsApi from '../../clases/api/reservations/reservations';

import BasicCrud from '../../components/crud/basic-crud';

const columns = ['#', 'Nombre', 'Email', 'Accciones'];

class Persons extends React.Component {
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
                    paginationInfo: paginationInfo,
                    events: events,
                    search: search,
                    columns: columns,
                    data: this.state.persons
                }}
            />
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Persons);