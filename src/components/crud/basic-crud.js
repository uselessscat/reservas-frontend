import React from 'react';

import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BasicCrud extends React.Component {
    render() {
        return (
            <div>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>{this.props.title}</h1>
                    <Link to={this.props.newLink} className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
                        <FontAwesomeIcon icon='plus' /> {this.props.newTitle}
                    </Link>
                </div>
                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Registros</h6>
                    </div>
                    <div className='card-body'>
                        <BootstrapTable
                            Bootstrap4={true}
                            remote={true}
                            {...this.props.table} />
                    </div>
                </div >
            </div>
        )
    }
}

export default BasicCrud;