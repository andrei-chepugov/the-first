import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { store } from './store/configureStore'

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={App} />
				<Route path='admin' component={App} />
				<Route path='genre' component={App} />
			</Route>
		</Router>,
  	</Provider>,
	document.querySelector( '#app' )
);

