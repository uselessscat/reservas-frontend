import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faBars);

export function TopbarSearch(props) {
    return (
        <form className='d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search'>
            <div className='input-group'>
                <input type='text' className='form-control bg-light border-0 small' placeholder='Search for...' aria-label='Search' aria-describedby='basic-addon2' />
                <div className='input-group-append'>
                    <button className='btn btn-primary' type='button'>
                        <FontAwesomeIcon icon='search' size='sm' />
                    </button>
                </div>
            </div>
        </form>
    )
}

export function Topbar(props) {
    return (
        <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
            <button id='sidebarToggleTop' className='btn btn-link d-md-none rounded-circle mr-3'>
                <FontAwesomeIcon icon='bars' />
            </button>
            {props.children}
        </nav>
    )
}