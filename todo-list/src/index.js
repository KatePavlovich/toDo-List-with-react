import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import TodoList from './app';
import store from './store';

ReactDOM.render(<Provider store={store}><TodoList /></Provider>, document.getElementById('root'));