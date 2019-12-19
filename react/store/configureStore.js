import { createStore } from 'redux'

import { rootReducer, initialState } from './reducers'

export default (context) => createStore(rootReducer, initialState(context))
