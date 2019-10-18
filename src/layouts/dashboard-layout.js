import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Icon, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 'theme.spacing(2)',
    },
    title: {
        flexGrow: 1,
    },
});

class DashboardLayout extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <Icon>menu</Icon>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>News</Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                {this.props.children}
            </div>
        )
    }
}

DashboardLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardLayout)
/*

<SidebarList>
                    {<this.props.sidebarContent />}
                </SidebarList>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar>
                            {<this.props.topbarContent />}
                        </Topbar>
                        <div className="container-fluid">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer>
                        {<this.props.footerContent />}
                    </Footer>
                </div>
*/