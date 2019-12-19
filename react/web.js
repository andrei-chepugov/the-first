import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { BrowserRoute } from "react-router";

import Routes from "./routes";
import configureStore from './store/configureStore'

const app = (url, context, store) =>
	<Provider store={store}>
		<BrowserRoute context={context}>
			<Routes />
		</BrowserRoute>
	</Provider >

export function render(url, context, rootSelectore) {
	const store = configureStore(context);
	const App = app(url, context, store);
	return ReactDOM.render(App, document.querySelector(rootSelectore))
}
export function render(url, context, rootSelectore) {
	const store = configureStore(context);
	const App = app(url, context, store);
	return ReactDOM.hydrate(App, document.querySelector(rootSelectore))
}

export default hydrate;
