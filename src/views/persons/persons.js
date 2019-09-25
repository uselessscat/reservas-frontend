import React from 'react';
import routes from '../../routing/routes';

import { Link } from 'react-router-dom';

import Table from '../../components/simple-table/table';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPlus
} from '@fortawesome/free-solid-svg-icons'
import ReservationsApi from '../../clases/api/resevations';

library.add(faPlus);

export default class Personas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        ReservationsApi.Persons.list(response => {
            console.log(response);
            this.setState({
                persons: response.data
            })
        });
    }

    render() {
        const personsBody = (this.state.persons.length > 0) ? this.state.persons.map((element, index) => {
            return (
                <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.name + ' ' + element.last_name}</td>
                    <td>{element.email}</td>
                </tr>
            )
        }) : <tr><td colSpan="3">Loading…</td></tr>

        return (
            <>
                <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>Personas</h1>
                    <Link to={routes.personsNew.path} className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
                        <FontAwesomeIcon icon={faPlus} /> Ingresar persona
                    </Link>
                </div>
                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Registros</h6>
                    </div>
                    <div className='card-body'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {personsBody}
                            </tbody>
                        </Table>

                    </div>
                </div>
            </>
        );
    }
}
