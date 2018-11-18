import React, {Component} from 'react';
import {createStore, bindActionCreators} from 'redux';
import {connect, Provider} from 'react-redux';
import ReactDOM from "react-dom";
import App from './components/App'
import {rootReducer} from "./store/reducers";

const store = createStore(rootReducer);

console.log('Store state: ', store.getState());

ReactDOM.render(<Provider store={store}>
    <App /></Provider>, document.getElementById('root'));
