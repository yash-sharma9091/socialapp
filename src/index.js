import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import {store, history} from './store';

import "bootstrap/dist/css/bootstrap.css";
import "./stylesheets/stylesheet.css";
import "./stylesheets/responsive.css";

ReactDOM.render(
  	<Provider store={store}>
    	<App history={history} />
  	</Provider>,
  	document.getElementById('root')
);

if (module.hot) {
  	module.hot.accept('./components/App', () => {
    	ReactDOM.render(
      		<Provider store={store}>
        		<App history={history} />
      		</Provider>,
      		document.getElementById('root'),
    	)
  	});
}
//registerServiceWorker();