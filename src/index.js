import 'bootstrap/dist/css/bootstrap.min.css';
import './css/sb-admin-2.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './routing/router';

// this file add all necesary icons
import './views/fa-icons';

ReactDOM.render(<Router></Router>, document.getElementById('root'));
