import React from 'react';
import ReactDOM from 'react-dom';

import Router from './routing/router';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
    <div>
        <CssBaseline />
        <Router></Router>
    </div>
    , document.getElementById('root'));
