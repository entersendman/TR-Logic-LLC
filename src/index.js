import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.css';
import Layout from './components/Layout/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
