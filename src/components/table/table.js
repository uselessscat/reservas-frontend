import React from 'react';
import EntryCountSelector from './entry-count-selector';
import Paginator from './paginator';
import EntryCount from './entry-count';

export default function Table(props) {
    return (
        <div>
            <div className='row '>
                <div className='col-sm-12 col-md-6'>
                    <EntryCountSelector options={[10, 25, 50, 100]} />
                </div>
                <div className='col-sm-12 col-md-6 text-right'>
                    <label className='d-inline-flex'>
                        <span className='mr-2'>Search:</span>
                        <input type='search' className='form-control form-control-sm' />
                    </label>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <table className="table table-hover table-striped table-bordered">
                        {props.children}
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-5">
                    <EntryCount from={1} to={10} total={100} />
                </div>
                <div className="col-sm-12 col-md-7">
                    <Paginator />
                </div>
            </div>
        </div>
    )
}