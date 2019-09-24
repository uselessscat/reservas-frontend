import React from 'react';
import { Table as ReactstrapTable } from 'reactstrap';

export default function Table(props) {
    return (
        <div>
            <div className='row '>
                <div className='col-sm-12 col-md-6'>
                    <label className='d-inline-flex'>
                        <span className='mr-2'>Show </span>
                        <select className='custom-select custom-select-sm form-control form-control-sm'>
                            <option value='10'>10</option>
                            <option value='25'>25</option>
                            <option value='50'>50</option>
                            <option value='100'>100</option>
                        </select>
                        <span className='ml-2'>entries</span>
                    </label>
                </div>
                <div className='col-sm-12 col-md-6 text-right'>
                    <label className='d-inline-flex'>
                        <span className='mr-2'>Search:</span>
                        <input type='search' className='form-control form-control-sm'/>
                    </label>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <ReactstrapTable hover striped bordered>
                        {props.children}
                    </ReactstrapTable>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <ul className="pagination justify-content-end">
                        {['Previous', 1, 2, 3, 4, 5, 6, 'Next'].map((item, index) => {
                            return (
                                <li key={index} className="paginate_button page-item previous">
                                    <a href="#" data-dt-idx="0" tabIndex="0" className="page-link">{item}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}