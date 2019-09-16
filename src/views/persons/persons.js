import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/module-routes';

export default function Personas() {
    return (
        <>
            <h1 className="h3 mb-4 text-gray-800">Personas</h1>
            <br />
            <p>
                <Link to={routes.personsNew()}>Crear Pueva Persona</Link>
            </p>
        </>
    );
}
