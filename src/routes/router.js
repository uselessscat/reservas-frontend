import React from 'react';

import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard-layout';

import Login from '../views/login';
import Dashboard from '../views/dashboard';
import Personas from '../views/persons';
import { Error404 } from '../views/errors';

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
            <LinkItem title='Dashboard' icon={faTachometerAlt} link='/dashboard' />
            <Separator />
            <HeaderItem title={'Mantenedores'} />
            <LinkItem title='Personas' icon={faUsers} link='/personas' />
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

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='dashboard' />
                </Route>

                <Route path='/login' component={Login} />

                <DashboardLayout
                    sidebar={SidebarContent()}
                    topbar={TopbarContent()}
                    footer={FooterContent()}>
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/personas' component={Personas} />
                </DashboardLayout>

                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    )
};

export default Router;