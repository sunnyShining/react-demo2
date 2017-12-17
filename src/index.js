import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/scss/index.css';
import App from './routes/App/App.jsx';
import registerServiceWorker from './utils/registerServiceWorker';
import store from './redux/store/index';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
