import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SidebarBrand(props) {
    return (
        <Link className='sidebar-brand d-flex align-items-center justify-content-center' to={props.link || './'}>
            {props.icon !== undefined &&
                <FontAwesomeIcon icon={props.icon} />
            }
            {props.children}
        </Link>
    )
}

export function SidebarItem(props) {
    return (
        <li className='nav-item'>
            <a className='nav-link' href='index.html'>
                {props.icon !== undefined &&
                    <FontAwesomeIcon icon={props.icon} fixedWidth />
                }
                <span>{props.title}</span>
            </a>
        </li>
    )
}

export function SidebarSeparator(props) {
    return (<hr className='sidebar-divider my-0' />)
}

export function Sidebar(props) {
    return (
        <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
            {props.children}
        </ul>
    )
}