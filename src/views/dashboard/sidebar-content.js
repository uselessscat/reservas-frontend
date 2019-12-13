import React from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem, ListItemIcon, ListItemText, Icon, Divider, ListSubheader } from '@material-ui/core';

import routes from '../../routing/routes';

export default function SidebarContent() {
    return (
        <React.Fragment>
            <List>
                <div>
                    <ListItem button component={Link} to={routes.dashboard.path}>
                        <ListItemIcon>
                            <Icon>dashboard</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                </div>
            </List>
            <Divider />
            <List>
                <div>
                    <ListSubheader inset>Datos</ListSubheader>

                    <ListItem button component={Link} to={routes.persons.path}>
                        <ListItemIcon>
                            <Icon>people</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Personas' />
                    </ListItem>
                </div>
            </List>
        </React.Fragment>
    )
}
