import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Table from '../../components/table/searchable-paginable-table';
import { Button, ButtonGroup } from 'react-bootstrap';

class BasicCrud extends React.Component {
    render() {
        const body = this.getPersonsTableBody()

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
                        <Table paginationInfo={this.props.table.paginationInfo} filter={this.props.table.filter} events={this.props.table.events}>
                            <thead>
                                <tr>
                                    {this.props.table.columns.map((column, key) => <th key={key}>{column}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {body}
                            </tbody>
                        </Table>
                    </div>
                </div >
            </div>
        )
    }

    getPersonsTableBody() {
        const data = this.props.table.data;

        return (data.length > 0) ? data.map((element, index) => {
            return (
                <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.name + ' ' + element.last_name}</td>
                    <td>{element.email}</td>
                    <td>
                        <ButtonGroup>
                            <Button variant="outline-primary">
                                <FontAwesomeIcon icon='pencil-alt' />
                            </Button>
                            <Button variant="outline-danger">
                                <FontAwesomeIcon icon='trash' />
                            </Button>
                        </ButtonGroup>
                    </td>
                </tr>
            )
        }) : <tr><td colSpan='3'>Loading…</td></tr>
    }
}

export default BasicCrud;