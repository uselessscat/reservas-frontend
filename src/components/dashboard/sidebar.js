import React from 'react';

export function SidebarBrand(props) {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            {props.children}
        </a>
    )
}

export function SidebarItem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>{props.title}</span>
            </a>
        </li>
    )
}

export function SidebarSeparator(props) {
    return (<hr className="sidebar-divider my-0" />)
}

export function Sidebar(props) {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {props.children}
        </ul>
    )
}