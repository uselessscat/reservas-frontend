import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routing/routes';

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
                    <div className='row form-group'>
                        <div className='col-4'>
                            <label for="name">Nombre</label>
                            <input type="name" className="form-control" id="name" />
                        </div>
                        <div className='col-4'>
                            <label for="last_name">Apellido</label>
                            <input type="last_name" className="form-control" id="last_name" />
                        </div>
                        <div className='col-4'>
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}