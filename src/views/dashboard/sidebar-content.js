import React from 'react';
import routes from '../../routing/routes';

import { List, ListItem, ListItemIcon, ListItemText, Icon, Divider, ListSubheader } from '@material-ui/core';

export default function SidebarContent() {
    return (
        <React.Fragment>
            <List>
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>dashboard</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </div>
            </List>
            <Divider />
            <List>
                <div>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>shoppingcart</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Orders" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>people</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Customers" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>bar_chart</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>layers</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Integrations" />
                    </ListItem>
                </div>
            </List>
            <Divider />
            <List>
                <div>
                    <ListSubheader inset>Saved reports</ListSubheader>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>assignment</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Current month" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>assignment</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Last quarter" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Icon>assignment</Icon>
                        </ListItemIcon>
                        <ListItemText primary="Year-end sale" />
                    </ListItem>
                </div>
            </List>
        </React.Fragment>
    )
}
