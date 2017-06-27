import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux"; //can be used as a function
import allReducers from "./reducers";
import App from "./components/app";

const store = createStore(allReducers); //all the data of the app

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
