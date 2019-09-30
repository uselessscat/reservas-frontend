import React from 'react';
import { connect } from 'react-redux';

import Table from '../components/table/table';
import Paginator from '../components/table/paginator';

class PaginableTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pages: 10,
            page: 1
        }

        this.onNext = this.onNext.bind(this);
        this.onPrev = this.onPrev.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onNext() {
        this.setState((prevState) => {
            console.log(prevState);

            return { page: prevState.page + 1 }
        });
    }

    onPrev() {
        console.log('prev');
        this.setState((prevState) => {
            return { page: prevState.page - 1 }
        });
    }

    onChange(id) {
        console.log('cambia')
        this.setState((prevState) => {
            return { page: id }
        });
    }

    render() {
        return (
            <>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>Personas</h1>
                </div>
                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Registros</h6>
                    </div>
                    <div className='card-body'>
                        <Paginator
                            pages={this.state.pages}
                            page={this.state.page}
                            onChange={this.onChange}
                            onPrev={this.onPrev}
                            onNext={this.onNext} />

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr></tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </>
        )
    }
}

export default PaginableTable;
