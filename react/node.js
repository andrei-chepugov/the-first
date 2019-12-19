import React from "react";
import ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';
import {StaticRouter} from "react-router-dom";

import Routes from "./routes";
import configureStore from './store/configureStore'

const app = (url, context, store) =>
	<Provider store={store}>
		<StaticRouter context={context} location={url}>
			<Routes />
		</StaticRouter>
	</Provider >

export function renderToString(url, context) {
	const store = configureStore(context);
	const App = app(url, context, store);
	return ReactDOMServer.renderToString(App)
}

export function renderToNodeStream(url, context) {
	const store = configureStore(context);
	const App = app(url, context, store);
	return ReactDOMServer.renderToNodeStream(App)
}

export default renderToNodeStream;
