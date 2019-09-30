import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

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
        <Link className='nav-link' to={props.link}>
            {props.icon !== undefined &&
                <FontAwesomeIcon icon={props.icon} fixedWidth />
            }
            <span>{props.title}</span>
        </Link>
    )
}

export function CollapseLinkItem(props) {
    return (
        <Link className='collapse-item' to={props.link}>{props.title}</Link>
    );
}

export class CollapsableNavItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <li className='nav-item'>
                <Link className='nav-link' href='#' onClick={this.toggle}>
                    <FontAwesomeIcon icon={this.props.icon} />
                    <span>{this.props.title}</span>
                </Link>
                <Collapse isOpen={this.state.collapse}>
                    {this.props.children}
                </Collapse>
            </li>
        );
    }
}

export function HeaderItem(props) {
    return (
        <div className='sidebar-heading'>
            {props.title}
        </div>
    )
}

export function Separator(props) {
    return (<hr className='sidebar-divider' />)
}

export function SidebarList(props) {
    return (
        <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
            {props.children}
        </ul>
    )
}