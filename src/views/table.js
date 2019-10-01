import React from 'react';

import PaginableTable from '../components/table/paginable-table';

class Tables extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            elements: 1234,
            page: 3,
            pages: 12,
            pageSize: 20
        }

        this.onChangePage = this.onChangePage.bind(this);
        this.onChangePageSize = this.onChangePageSize.bind(this);
    }

    onChangePage(newValue) {

    }

    onChangePageSize(newValue) {

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
                        <PaginableTable striped bordered hover
                            elements={this.state.elements}
                            page={this.state.page}
                            pages={this.state.pages}
                            pageSize={this.state.pageSize}
                            pageSizes={[5, 10, 25, 100]}
                            onChangePage={this.onChangePage}
                            onChangePageSize={this.onChangePageSize}>

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
                        </PaginableTable>
                    </div>
                </div>
            </>
        )
    }
}

export default Tables;
