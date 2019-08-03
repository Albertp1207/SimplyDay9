import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import rootReduser from "./redux/reducers/rootReducer";

const store = createStore(rootReduser,applyMiddleware(ReduxThunk ))

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>
, document.getElementById('root'));