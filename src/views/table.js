import React from 'react';
import { connect } from 'react-redux';

import Table from '../components/table/table';
import Paginator from '../components/table/paginator';

const data = {

}

class Tables extends React.Component {
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
                        <Paginator pages={10}></Paginator>

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

export default Tables;
