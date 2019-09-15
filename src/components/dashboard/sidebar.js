import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Brand(props) {
    return (
        <Link className='sidebar-brand d-flex align-items-center justify-content-center' to={props.link || './'}>
            {props.icon !== undefined &&
                <FontAwesomeIcon icon={props.icon} />
            }
            {props.children}
        </Link>
    )
}

export function LinkItem(props) {
    return (
        <li className='nav-item'>
            <Link className='nav-link' to={props.link}>
                {props.icon !== undefined &&
                    <FontAwesomeIcon icon={props.icon} fixedWidth />
                }
                <span>{props.title}</span>
            </Link>
        </li>
    )
}

export function HeaderItem(props) {
    return (
        <div className="sidebar-heading">
            {props.title}
        </div>
    )
}

export function Separator(props) {
    return (<hr className='sidebar-divider' />)
}

export function Sidebar(props) {
    return (
        <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
            {props.children}
        </ul>
    )
}