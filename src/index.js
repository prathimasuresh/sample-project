import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Wrapper from './cart.js';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/itemLists';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
	<Provider store = {store}>
		<ItemList />
	</Provider>,
	document.getElementById('root')
);


