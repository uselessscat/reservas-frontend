import React from 'react';
import routes from '../../routing/routes';

import { Brand, LinkItem, Separator, HeaderItem } from '../../components/dashboard/sidebar';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faAddressBook,
    faTachometerAlt,
    faUsers
} from '@fortawesome/free-solid-svg-icons'

library.add(faAddressBook, faTachometerAlt, faUsers);

export default function Sidebar() {
    return (
        <React.Fragment>
            <Brand title='Reservations' icon={faAddressBook}>
                <div className='sidebar-brand-text mx-3'>Reservations</div>
            </Brand>
            <LinkItem title='Dashboard' icon={faTachometerAlt} link={routes.dashboard.path} />
            <Separator />
            <HeaderItem title={'Mantenedores'} />
            <LinkItem title='Personas' icon={faUsers} link={routes.persons.path} />
        </React.Fragment>
    )
}
