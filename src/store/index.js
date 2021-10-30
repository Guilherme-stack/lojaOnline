import { createStore, combineReducers } from "redux";

import produtoReducer from './produtos'

const rootReducer = combineReducers({
    produtos:produtoReducer,
})
export default createStore(rootReducer)