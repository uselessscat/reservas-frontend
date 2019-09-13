import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sb-admin-2.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './views/dashboard';

ReactDOM.render((
    <Dashboard>
        <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
    </Dashboard>
), document.getElementById('root'));
