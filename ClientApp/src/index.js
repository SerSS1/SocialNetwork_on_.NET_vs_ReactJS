import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/store";
import {Provider} from "react-redux";
import $ from "jquery"

// let RerenderDom = () => {
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
// }

// RerenderDom();
//
// store.subscribe(() => {
//     RerenderDom()
// });

//reportWebVitals();
