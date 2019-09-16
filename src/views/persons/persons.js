import React from 'react';
import routes from '../../routing/routes';

import { Link } from 'react-router-dom';

export default function Personas() {
    return (
        <>
            <h1 className="h3 mb-4 text-gray-800">Personas</h1>
            <br />
            <p>
                <Link to={routes.personsNew.path}>Crear Pueva Persona</Link>
            </p>
        </>
    );
}
