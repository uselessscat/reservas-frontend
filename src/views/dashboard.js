import React from 'react';

import DashboardLayout from '../layouts/dashboard-layout';

import { Brand, LinkItem, Separator, HeaderItem } from '../components/dashboard/sidebar';
import { TopbarSearch } from '../components/dashboard/topbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faAddressBook,
    faTachometerAlt,
    faUsers
} from '@fortawesome/free-solid-svg-icons'

library.add(faAddressBook, faTachometerAlt, faUsers);

function SidebarContent() {
    return (
        <React.Fragment>
            <Brand title='Reservations' icon={faAddressBook}>
                <div className='sidebar-brand-text mx-3'>Reservations</div>
            </Brand>
            <LinkItem title='Dashboard' icon={faTachometerAlt} />
            <Separator />
            <HeaderItem title={'Mantenedores'} />
            <LinkItem title='Personas' icon={faUsers} link="/personas"/>
        </React.Fragment>
    )
}

function TopbarContent() {
    return (<TopbarSearch />)
}

function FooterContent() {
    return (
        <div className='copyright text-center my-auto'>
            <span>Copyright &copy; Your Website 2019</span>
        </div>
    )
}

class Dashboard extends React.Component {
    render() {
        return (
            <DashboardLayout
                sidebar={SidebarContent()}
                topbar={TopbarContent()}
                footer={FooterContent()}>
                <h1 className='h3 mb-4 text-gray-800'>Blank Page</h1>
            </DashboardLayout>
        )
    }
}

export default Dashboard;