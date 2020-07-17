import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import store from './Modules/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);