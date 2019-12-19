export const initialState = {
    user: 'Unknown User',
}

import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'

export const rootReducer = combineReducers( {
    page: pageReducer,
    user: userReducer,
} )