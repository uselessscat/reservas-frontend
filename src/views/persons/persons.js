import React from 'react';
import routes from '../../routing/routes';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faPlus
} from '@fortawesome/free-solid-svg-icons'

library.add(faPlus);

export default function Personas() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Personas</h1>
                <Link to={routes.personsNew.path} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <FontAwesomeIcon icon={faPlus} /> Ingresar persona
                </Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Registros</h6>
                </div>
                <div className="card-body">
                    Content    
                </div>
            </div>
        </>
    );
}
