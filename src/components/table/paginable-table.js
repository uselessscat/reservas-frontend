import React from 'react';
import Table from 'react-bootstrap/Table';

import PaginationSize from './pagination-size';
import Paginator from './paginator';
import PaginationInfo from './pagination-info';

export default function PaginableTable({ paginationSize, paginationInfo, paginator, children }) {
    return (
        <div>
            <div className='row '>
                <div className='col-sm-12 col-md-6'>
                    <PaginationSize {...paginationSize} />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Table hover striped bordered>
                        {children}
                    </Table>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <PaginationInfo {...paginationInfo} />
                </div>
                <div className="col-sm-12 col-md-7">
                    <Paginator {...paginator} />
                </div>
            </div>
        </div>
    )
}