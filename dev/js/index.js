import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from "redux"; //can be used as a function

const store = createStore(); //all the data of the app

ReactDOM.render(
    <h1>Hey now!</h1>,
    document.getElementById('root')
);
