import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routing/routes';
import PersonForm from './personForm';

export default function (props) {
    return (
        <>
            <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                <h1 className='h3 mb-0 text-gray-800'>Ingresar persona</h1>
                <Link to={routes.persons.path} className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
                    Volver
                </Link>
            </div>
            <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                    <h6 className='m-0 font-weight-bold text-primary'>Datos de la persona</h6>
                </div>
                <div className='card-body'>
                    <PersonForm />
                </div>
            </div>
        </>
    )
}