import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import routes from '../../routing/routes';

export default function PrivateRoute({ component: Component, ...rest }) {
    // TODO: user verification
    let user = 1;

    const authComponentResolver = innerProps => {
        const authorizedComponent = <Component {...innerProps} />
        const redirectToAuthComponent = <Redirect to={{ pathname: routes.login.path, state: { from: innerProps.location } }} />

        if (user !== undefined) {
            return authorizedComponent;
        } else {
            return redirectToAuthComponent;
        }
    }

    return (
        <Route {...rest} render={authComponentResolver} />
    );
}