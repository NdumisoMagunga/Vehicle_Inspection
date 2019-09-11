import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux packages
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk,logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));
serviceWorker.unregister();
