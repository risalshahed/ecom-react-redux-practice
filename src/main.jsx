import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// font awesom
import 'font-awesome/css/font-awesome.min.css'
// react router dom
import { BrowserRouter } from 'react-router-dom';
// provider
import { Provider } from 'react-redux';
// store
import store from '../redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
