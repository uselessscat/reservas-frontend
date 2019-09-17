import React from 'react';
import { Table as ReactstrapTable } from 'reactstrap';

export default function Table(props) {
    return (
        <div>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <div className='dataTables_length' id='dataTable_length'>
                        <label>Show
                            <select name='dataTable_length' aria-controls='dataTable' className='custom-select custom-select-sm form-control form-control-sm'>
                                <option value='10'>10</option>
                                <option value='25'>25</option>
                                <option value='50'>50</option>
                                <option value='100'>100</option>
                            </select> entries
                        </label>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div id='dataTable_filter' className='dataTables_filter'>
                        <label>Search: <input type='search' className='form-control form-control-sm' placeholder='' aria-controls='dataTable' />
                        </label>
                    </div>
                </div>
            </div>

            <div className='row'>
                <ReactstrapTable hover striped bordered>
                    {props.children}
                </ReactstrapTable>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                        <ul className="pagination">
                            {['Previous', 1, 2, 3, 4, 5, 6, 'Next'].map((item, index) => {
                                return (
                                    <li key={index} className="paginate_button page-item previous" id="dataTable_previous">
                                        <a href="#" aria-controls="dataTable" data-dt-idx="0" tabIndex="0" className="page-link">{item}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}