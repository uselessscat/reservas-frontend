import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars);

export default function Topbar(props) {
    return (
        <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
            <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            {props.children}
        </nav>
    )
}