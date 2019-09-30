import React from 'react';
import routes from '../../routing/routes';

import { Brand, LinkItem, CollapsableNavItem, CollapseLinkItem, Separator, HeaderItem } from '../../components/dashboard/sidebar';

export default function Sidebar() {
    return (
        <React.Fragment>
            <Brand title='Reservations' icon={'address-book'}>
                <div className='sidebar-brand-text mx-3'>Reservations</div>
            </Brand>

            <li className='nav-item'>
                <LinkItem title='Dashboard' icon={'tachometer-alt'} link={routes.dashboard.path} />
            </li>

            <Separator />

            <HeaderItem title={'Mantenedores'} />

            <li className='nav-item'>
                <LinkItem title='Sucursales' icon={'users'} link={routes.branchOffices.path} />
            </li>
            <li className='nav-item'>
                <CollapsableNavItem title='Personas' icon={'users'}>
                    <div className='bg-white py-2 collapse-inner rounded'>
                        <CollapseLinkItem title='Roles' icon={'users'} link={routes.roles.path} />
                        <CollapseLinkItem title='Personas' icon={'users'} link={routes.persons.path} />
                    </div>
                </CollapsableNavItem>
            </li>
        </React.Fragment>
    )
}
