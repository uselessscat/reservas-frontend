import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

import PaginationSize from './pagination-size';
import Paginator from './paginator';
import PaginationInfo from './pagination-info';

export default function SearchablePaginableTable({ paginationInfo, events = {}, filter, children }) {
    return (
        <div>
            <div className='row '>
                <div className='col-sm-12 col-md-6'>
                    <PaginationSize onChangePageSize={events.onChangePageSize} {...paginationInfo} />
                </div>
                <div className='col-sm-12 col-md-6 text-right'>
                    <label className='d-inline-flex'>
                        <span className='mr-2'>Search:</span>
                        <Form.Control as='input' type='search' className='form-control form-control-sm' value={filter} onChange={events.onChangeSearch} />
                    </label>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Table hover striped bordered>
                        {children}
                    </Table>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-5'>
                    <PaginationInfo {...paginationInfo} />
                </div>
                <div className='col-sm-12 col-md-7'>
                    <Paginator onChangePage={events.onChangePage} {...paginationInfo} />
                </div>
            </div>
        </div>
    )
}