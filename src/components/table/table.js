import React from 'react';
import TableBootstrap from 'react-bootstrap/Table';

export default function Table(props) {
    return (
        <div>
            <div className='row'>
                <div className='col-12'>
                    <TableBootstrap hover striped bordered>
                        {props.children}
                    </TableBootstrap>
                </div>
            </div>
        </div>
    )
}