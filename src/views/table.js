import React from 'react';

import PaginableTable from '../components/table/paginable-table';

class Tables extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            elements: 1234,
            page: 1,
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
        const pagSize = {
            pageSize: this.state.pageSize,
            pageSizes: [5, 10, 20, 100],
        }

        const pagInfo = {
            from: 10,
            to: 19,
            total: 100,
        }

        const pagination = {
            page: this.state.page,
            pages: this.state.pages,
            elements: this.state.elements,
            onChangePage: this.onChangePage,
            onChangePageSize: this.onChangePageSize,
        }

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
                                <tr>
                                    <td>asd</td>
                                    <td>asd2</td>
                                    <td>asd3</td>
                                </tr>
                            </tbody>
                        </PaginableTable>
                    </div>
                </div>
            </>
        )
    }
}

export default Tables;
